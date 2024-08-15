/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import * as vscode from 'vscode'
import { getIcon } from '../../../icons'
import { TreeNode } from '../../../treeview/resourceTreeDataProvider'
import { ResourceTreeEntity, SamAppLocation } from '../samProject'
import { SERVERLESS_FUNCTION_TYPE } from '../../../cloudformation/cloudformation'
import { generatePropertyNodes } from './propertyNode'
import { generateDeployedLocalNode } from './deployedNode'
import { StackResource } from '../../../../lambda/commands/listSamResources'

enum ResourceTypeId {
    Function = 'function',
    Api = 'api',
}

export class ResourceNode implements TreeNode {
    public readonly id = this.resourceTreeEntity.Id
    private readonly type = this.resourceTreeEntity.Type
    public readonly functionName = this.deployedResource?.LogicalResourceId

    public constructor(
        private readonly location: SamAppLocation,
        private readonly resourceTreeEntity: ResourceTreeEntity,
        private readonly stackName?: string,
        private readonly region?: string,
        private readonly deployedResource?: StackResource
    ) {}

    public get resource() {
        return {
            resource: this.resourceTreeEntity,
            location: this.location.samTemplateUri,
            workspaceFolder: this.location.workspaceFolder,
            region: this.region,
            stackName: this.stackName,
        }
    }

    public async getChildren() {
        let deployedNode: TreeNode[] = []

        if (this.deployedResource && this.region && this.stackName) {
            deployedNode = await generateDeployedLocalNode(this.deployedResource, this.region, this.stackName)
        }
        return [...generatePropertyNodes(this.resourceTreeEntity), ...deployedNode]
    }

    public getTreeItem() {
        const item =
            this.type === SERVERLESS_FUNCTION_TYPE
                ? new vscode.TreeItem(this.resourceTreeEntity.Id, vscode.TreeItemCollapsibleState.Collapsed)
                : new vscode.TreeItem(this.resourceTreeEntity.Id, vscode.TreeItemCollapsibleState.None)
        item.tooltip = this.location.samTemplateUri.toString()
        item.iconPath =
            this.type === SERVERLESS_FUNCTION_TYPE ? getIcon('aws-lambda-function') : getIcon('vscode-symbol-event')
        item.resourceUri = this.location.samTemplateUri
        item.contextValue = `awsAppBuilderResourceNode.${this.getResourceId()}`
        return item
    }

    private getResourceId(): ResourceTypeId {
        switch (this.type) {
            case SERVERLESS_FUNCTION_TYPE:
                return ResourceTypeId.Function
            default:
                return ResourceTypeId.Api
        }
    }
}

export function generateResourceNodes(
    app: SamAppLocation,
    resources: NonNullable<ResourceTreeEntity[]>,
    stackName?: string,
    region?: string,
    deployedResources?: StackResource[]
): ResourceNode[] {
    if (!deployedResources) {
        return resources.map((resource) => new ResourceNode(app, resource, stackName, region))
    }

    return resources.map((resource) => {
        if (resource.Type === SERVERLESS_FUNCTION_TYPE) {
            const deployedResource = deployedResources.find(
                (deployedResource) => resource.Id === deployedResource.LogicalResourceId
            )
            return new ResourceNode(app, resource, stackName, region, deployedResource)
        } else {
            return new ResourceNode(app, resource, stackName, region)
        }
    })
}