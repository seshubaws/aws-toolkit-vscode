/*!
 * Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { References } from '../client/consolas'

export class LicenseUtil {
    private static _licenseLookup: { [name: string]: string } = {
        '0BSD': 'https://spdx.org/licenses/0BSD.html',
        AAL: 'https://spdx.org/licenses/AAL.html',
        ADSL: 'https://spdx.org/licenses/ADSL.html',
        'AFL-1.1': 'https://spdx.org/licenses/AFL-1.1.html',
        'AFL-1.2': 'https://spdx.org/licenses/AFL-1.2.html',
        'AFL-2.0': 'https://spdx.org/licenses/AFL-2.0.html',
        'AFL-2.1': 'https://spdx.org/licenses/AFL-2.1.html',
        'AFL-3.0': 'https://spdx.org/licenses/AFL-3.0.html',
        'AGPL-1.0-only': 'https://spdx.org/licenses/AGPL-1.0-only.html',
        'AGPL-1.0-or-later': 'https://spdx.org/licenses/AGPL-1.0-or-later.html',
        'AGPL-3.0-only': 'https://spdx.org/licenses/AGPL-3.0-only.html',
        'AGPL-3.0-or-later': 'https://spdx.org/licenses/AGPL-3.0-or-later.html',
        AMDPLPA: 'https://spdx.org/licenses/AMDPLPA.html',
        AML: 'https://spdx.org/licenses/AML.html',
        AMPAS: 'https://spdx.org/licenses/AMPAS.html',
        'ANTLR-PD': 'https://spdx.org/licenses/ANTLR-PD.html',
        'ANTLR-PD-fallback': 'https://spdx.org/licenses/ANTLR-PD-fallback.html',
        APAFML: 'https://spdx.org/licenses/APAFML.html',
        'APL-1.0': 'https://spdx.org/licenses/APL-1.0.html',
        'APSL-1.0': 'https://spdx.org/licenses/APSL-1.0.html',
        'APSL-1.1': 'https://spdx.org/licenses/APSL-1.1.html',
        'APSL-1.2': 'https://spdx.org/licenses/APSL-1.2.html',
        'APSL-2.0': 'https://spdx.org/licenses/APSL-2.0.html',
        Abstyles: 'https://spdx.org/licenses/Abstyles.html',
        'Adobe-2006': 'https://spdx.org/licenses/Adobe-2006.html',
        'Adobe-Glyph': 'https://spdx.org/licenses/Adobe-Glyph.html',
        Afmparse: 'https://spdx.org/licenses/Afmparse.html',
        Aladdin: 'https://spdx.org/licenses/Aladdin.html',
        'Apache-1.0': 'https://spdx.org/licenses/Apache-1.0.html',
        'Apache-1.1': 'https://spdx.org/licenses/Apache-1.1.html',
        'Apache-2.0': 'https://spdx.org/licenses/Apache-2.0.html',
        'App-s2p': 'https://spdx.org/licenses/App-s2p.html',
        'Artistic-1.0': 'https://spdx.org/licenses/Artistic-1.0.html',
        'Artistic-1.0-Perl': 'https://spdx.org/licenses/Artistic-1.0-Perl.html',
        'Artistic-1.0-cl8': 'https://spdx.org/licenses/Artistic-1.0-cl8.html',
        'Artistic-2.0': 'https://spdx.org/licenses/Artistic-2.0.html',
        'BSD-1-Clause': 'https://spdx.org/licenses/BSD-1-Clause.html',
        'BSD-2-Clause': 'https://spdx.org/licenses/BSD-2-Clause.html',
        'BSD-2-Clause-Patent': 'https://spdx.org/licenses/BSD-2-Clause-Patent.html',
        'BSD-2-Clause-Views': 'https://spdx.org/licenses/BSD-2-Clause-Views.html',
        'BSD-3-Clause': 'https://spdx.org/licenses/BSD-3-Clause.html',
        'BSD-3-Clause-Attribution': 'https://spdx.org/licenses/BSD-3-Clause-Attribution.html',
        'BSD-3-Clause-Clear': 'https://spdx.org/licenses/BSD-3-Clause-Clear.html',
        'BSD-3-Clause-LBNL': 'https://spdx.org/licenses/BSD-3-Clause-LBNL.html',
        'BSD-3-Clause-Modification': 'https://spdx.org/licenses/BSD-3-Clause-Modification.html',
        'BSD-3-Clause-No-Military-License': 'https://spdx.org/licenses/BSD-3-Clause-No-Military-License.html',
        'BSD-3-Clause-No-Nuclear-License': 'https://spdx.org/licenses/BSD-3-Clause-No-Nuclear-License.html',
        'BSD-3-Clause-No-Nuclear-License-2014': 'https://spdx.org/licenses/BSD-3-Clause-No-Nuclear-License-2014.html',
        'BSD-3-Clause-No-Nuclear-Warranty': 'https://spdx.org/licenses/BSD-3-Clause-No-Nuclear-Warranty.html',
        'BSD-3-Clause-Open-MPI': 'https://spdx.org/licenses/BSD-3-Clause-Open-MPI.html',
        'BSD-4-Clause': 'https://spdx.org/licenses/BSD-4-Clause.html',
        'BSD-4-Clause-Shortened': 'https://spdx.org/licenses/BSD-4-Clause-Shortened.html',
        'BSD-4-Clause-UC': 'https://spdx.org/licenses/BSD-4-Clause-UC.html',
        'BSD-Protection': 'https://spdx.org/licenses/BSD-Protection.html',
        'BSD-Source-Code': 'https://spdx.org/licenses/BSD-Source-Code.html',
        'BSL-1.0': 'https://spdx.org/licenses/BSL-1.0.html',
        'BUSL-1.1': 'https://spdx.org/licenses/BUSL-1.1.html',
        Bahyph: 'https://spdx.org/licenses/Bahyph.html',
        Barr: 'https://spdx.org/licenses/Barr.html',
        Beerware: 'https://spdx.org/licenses/Beerware.html',
        'BitTorrent-1.0': 'https://spdx.org/licenses/BitTorrent-1.0.html',
        'BitTorrent-1.1': 'https://spdx.org/licenses/BitTorrent-1.1.html',
        'BlueOak-1.0.0': 'https://spdx.org/licenses/BlueOak-1.0.0.html',
        Borceux: 'https://spdx.org/licenses/Borceux.html',
        'C-UDA-1.0': 'https://spdx.org/licenses/C-UDA-1.0.html',
        'CAL-1.0': 'https://spdx.org/licenses/CAL-1.0.html',
        'CAL-1.0-Combined-Work-Exception': 'https://spdx.org/licenses/CAL-1.0-Combined-Work-Exception.html',
        'CATOSL-1.1': 'https://spdx.org/licenses/CATOSL-1.1.html',
        'CC-BY-1.0': 'https://spdx.org/licenses/CC-BY-1.0.html',
        'CC-BY-2.0': 'https://spdx.org/licenses/CC-BY-2.0.html',
        'CC-BY-2.5': 'https://spdx.org/licenses/CC-BY-2.5.html',
        'CC-BY-2.5-AU': 'https://spdx.org/licenses/CC-BY-2.5-AU.html',
        'CC-BY-3.0': 'https://spdx.org/licenses/CC-BY-3.0.html',
        'CC-BY-3.0-AT': 'https://spdx.org/licenses/CC-BY-3.0-AT.html',
        'CC-BY-3.0-DE': 'https://spdx.org/licenses/CC-BY-3.0-DE.html',
        'CC-BY-3.0-NL': 'https://spdx.org/licenses/CC-BY-3.0-NL.html',
        'CC-BY-3.0-US': 'https://spdx.org/licenses/CC-BY-3.0-US.html',
        'CC-BY-4.0': 'https://spdx.org/licenses/CC-BY-4.0.html',
        'CC-BY-NC-1.0': 'https://spdx.org/licenses/CC-BY-NC-1.0.html',
        'CC-BY-NC-2.0': 'https://spdx.org/licenses/CC-BY-NC-2.0.html',
        'CC-BY-NC-2.5': 'https://spdx.org/licenses/CC-BY-NC-2.5.html',
        'CC-BY-NC-3.0': 'https://spdx.org/licenses/CC-BY-NC-3.0.html',
        'CC-BY-NC-3.0-DE': 'https://spdx.org/licenses/CC-BY-NC-3.0-DE.html',
        'CC-BY-NC-4.0': 'https://spdx.org/licenses/CC-BY-NC-4.0.html',
        'CC-BY-NC-ND-1.0': 'https://spdx.org/licenses/CC-BY-NC-ND-1.0.html',
        'CC-BY-NC-ND-2.0': 'https://spdx.org/licenses/CC-BY-NC-ND-2.0.html',
        'CC-BY-NC-ND-2.5': 'https://spdx.org/licenses/CC-BY-NC-ND-2.5.html',
        'CC-BY-NC-ND-3.0': 'https://spdx.org/licenses/CC-BY-NC-ND-3.0.html',
        'CC-BY-NC-ND-3.0-DE': 'https://spdx.org/licenses/CC-BY-NC-ND-3.0-DE.html',
        'CC-BY-NC-ND-3.0-IGO': 'https://spdx.org/licenses/CC-BY-NC-ND-3.0-IGO.html',
        'CC-BY-NC-ND-4.0': 'https://spdx.org/licenses/CC-BY-NC-ND-4.0.html',
        'CC-BY-NC-SA-1.0': 'https://spdx.org/licenses/CC-BY-NC-SA-1.0.html',
        'CC-BY-NC-SA-2.0': 'https://spdx.org/licenses/CC-BY-NC-SA-2.0.html',
        'CC-BY-NC-SA-2.0-FR': 'https://spdx.org/licenses/CC-BY-NC-SA-2.0-FR.html',
        'CC-BY-NC-SA-2.0-UK': 'https://spdx.org/licenses/CC-BY-NC-SA-2.0-UK.html',
        'CC-BY-NC-SA-2.5': 'https://spdx.org/licenses/CC-BY-NC-SA-2.5.html',
        'CC-BY-NC-SA-3.0': 'https://spdx.org/licenses/CC-BY-NC-SA-3.0.html',
        'CC-BY-NC-SA-3.0-DE': 'https://spdx.org/licenses/CC-BY-NC-SA-3.0-DE.html',
        'CC-BY-NC-SA-3.0-IGO': 'https://spdx.org/licenses/CC-BY-NC-SA-3.0-IGO.html',
        'CC-BY-NC-SA-4.0': 'https://spdx.org/licenses/CC-BY-NC-SA-4.0.html',
        'CC-BY-ND-1.0': 'https://spdx.org/licenses/CC-BY-ND-1.0.html',
        'CC-BY-ND-2.0': 'https://spdx.org/licenses/CC-BY-ND-2.0.html',
        'CC-BY-ND-2.5': 'https://spdx.org/licenses/CC-BY-ND-2.5.html',
        'CC-BY-ND-3.0': 'https://spdx.org/licenses/CC-BY-ND-3.0.html',
        'CC-BY-ND-3.0-DE': 'https://spdx.org/licenses/CC-BY-ND-3.0-DE.html',
        'CC-BY-ND-4.0': 'https://spdx.org/licenses/CC-BY-ND-4.0.html',
        'CC-BY-SA-1.0': 'https://spdx.org/licenses/CC-BY-SA-1.0.html',
        'CC-BY-SA-2.0': 'https://spdx.org/licenses/CC-BY-SA-2.0.html',
        'CC-BY-SA-2.0-UK': 'https://spdx.org/licenses/CC-BY-SA-2.0-UK.html',
        'CC-BY-SA-2.1-JP': 'https://spdx.org/licenses/CC-BY-SA-2.1-JP.html',
        'CC-BY-SA-2.5': 'https://spdx.org/licenses/CC-BY-SA-2.5.html',
        'CC-BY-SA-3.0': 'https://spdx.org/licenses/CC-BY-SA-3.0.html',
        'CC-BY-SA-3.0-AT': 'https://spdx.org/licenses/CC-BY-SA-3.0-AT.html',
        'CC-BY-SA-3.0-DE': 'https://spdx.org/licenses/CC-BY-SA-3.0-DE.html',
        'CC-BY-SA-4.0': 'https://spdx.org/licenses/CC-BY-SA-4.0.html',
        'CC-PDDC': 'https://spdx.org/licenses/CC-PDDC.html',
        'CC0-1.0': 'https://spdx.org/licenses/CC0-1.0.html',
        'CDDL-1.0': 'https://spdx.org/licenses/CDDL-1.0.html',
        'CDDL-1.1': 'https://spdx.org/licenses/CDDL-1.1.html',
        'CDL-1.0': 'https://spdx.org/licenses/CDL-1.0.html',
        'CDLA-Permissive-1.0': 'https://spdx.org/licenses/CDLA-Permissive-1.0.html',
        'CDLA-Permissive-2.0': 'https://spdx.org/licenses/CDLA-Permissive-2.0.html',
        'CDLA-Sharing-1.0': 'https://spdx.org/licenses/CDLA-Sharing-1.0.html',
        'CECILL-1.0': 'https://spdx.org/licenses/CECILL-1.0.html',
        'CECILL-1.1': 'https://spdx.org/licenses/CECILL-1.1.html',
        'CECILL-2.0': 'https://spdx.org/licenses/CECILL-2.0.html',
        'CECILL-2.1': 'https://spdx.org/licenses/CECILL-2.1.html',
        'CECILL-B': 'https://spdx.org/licenses/CECILL-B.html',
        'CECILL-C': 'https://spdx.org/licenses/CECILL-C.html',
        'CERN-OHL-1.1': 'https://spdx.org/licenses/CERN-OHL-1.1.html',
        'CERN-OHL-1.2': 'https://spdx.org/licenses/CERN-OHL-1.2.html',
        'CERN-OHL-P-2.0': 'https://spdx.org/licenses/CERN-OHL-P-2.0.html',
        'CERN-OHL-S-2.0': 'https://spdx.org/licenses/CERN-OHL-S-2.0.html',
        'CERN-OHL-W-2.0': 'https://spdx.org/licenses/CERN-OHL-W-2.0.html',
        'CNRI-Jython': 'https://spdx.org/licenses/CNRI-Jython.html',
        'CNRI-Python': 'https://spdx.org/licenses/CNRI-Python.html',
        'CNRI-Python-GPL-Compatible': 'https://spdx.org/licenses/CNRI-Python-GPL-Compatible.html',
        'COIL-1.0': 'https://spdx.org/licenses/COIL-1.0.html',
        'CPAL-1.0': 'https://spdx.org/licenses/CPAL-1.0.html',
        'CPL-1.0': 'https://spdx.org/licenses/CPL-1.0.html',
        'CPOL-1.02': 'https://spdx.org/licenses/CPOL-1.02.html',
        'CUA-OPL-1.0': 'https://spdx.org/licenses/CUA-OPL-1.0.html',
        Caldera: 'https://spdx.org/licenses/Caldera.html',
        ClArtistic: 'https://spdx.org/licenses/ClArtistic.html',
        'Community-Spec-1.0': 'https://spdx.org/licenses/Community-Spec-1.0.html',
        'Condor-1.1': 'https://spdx.org/licenses/Condor-1.1.html',
        Crossword: 'https://spdx.org/licenses/Crossword.html',
        CrystalStacker: 'https://spdx.org/licenses/CrystalStacker.html',
        Cube: 'https://spdx.org/licenses/Cube.html',
        'D-FSL-1.0': 'https://spdx.org/licenses/D-FSL-1.0.html',
        'DL-DE-BY-2.0': 'https://spdx.org/licenses/DL-DE-BY-2.0.html',
        DOC: 'https://spdx.org/licenses/DOC.html',
        'DRL-1.0': 'https://spdx.org/licenses/DRL-1.0.html',
        DSDP: 'https://spdx.org/licenses/DSDP.html',
        Dotseqn: 'https://spdx.org/licenses/Dotseqn.html',
        'ECL-1.0': 'https://spdx.org/licenses/ECL-1.0.html',
        'ECL-2.0': 'https://spdx.org/licenses/ECL-2.0.html',
        'EFL-1.0': 'https://spdx.org/licenses/EFL-1.0.html',
        'EFL-2.0': 'https://spdx.org/licenses/EFL-2.0.html',
        EPICS: 'https://spdx.org/licenses/EPICS.html',
        'EPL-1.0': 'https://spdx.org/licenses/EPL-1.0.html',
        'EPL-2.0': 'https://spdx.org/licenses/EPL-2.0.html',
        EUDatagrid: 'https://spdx.org/licenses/EUDatagrid.html',
        'EUPL-1.0': 'https://spdx.org/licenses/EUPL-1.0.html',
        'EUPL-1.1': 'https://spdx.org/licenses/EUPL-1.1.html',
        'EUPL-1.2': 'https://spdx.org/licenses/EUPL-1.2.html',
        'Elastic-2.0': 'https://spdx.org/licenses/Elastic-2.0.html',
        Entessa: 'https://spdx.org/licenses/Entessa.html',
        'ErlPL-1.1': 'https://spdx.org/licenses/ErlPL-1.1.html',
        Eurosym: 'https://spdx.org/licenses/Eurosym.html',
        'FDK-AAC': 'https://spdx.org/licenses/FDK-AAC.html',
        FSFAP: 'https://spdx.org/licenses/FSFAP.html',
        FSFUL: 'https://spdx.org/licenses/FSFUL.html',
        FSFULLR: 'https://spdx.org/licenses/FSFULLR.html',
        FTL: 'https://spdx.org/licenses/FTL.html',
        Fair: 'https://spdx.org/licenses/Fair.html',
        'Frameworx-1.0': 'https://spdx.org/licenses/Frameworx-1.0.html',
        'FreeBSD-DOC': 'https://spdx.org/licenses/FreeBSD-DOC.html',
        FreeImage: 'https://spdx.org/licenses/FreeImage.html',
        GD: 'https://spdx.org/licenses/GD.html',
        'GFDL-1.1-invariants-only': 'https://spdx.org/licenses/GFDL-1.1-invariants-only.html',
        'GFDL-1.1-invariants-or-later': 'https://spdx.org/licenses/GFDL-1.1-invariants-or-later.html',
        'GFDL-1.1-no-invariants-only': 'https://spdx.org/licenses/GFDL-1.1-no-invariants-only.html',
        'GFDL-1.1-no-invariants-or-later': 'https://spdx.org/licenses/GFDL-1.1-no-invariants-or-later.html',
        'GFDL-1.1-only': 'https://spdx.org/licenses/GFDL-1.1-only.html',
        'GFDL-1.1-or-later': 'https://spdx.org/licenses/GFDL-1.1-or-later.html',
        'GFDL-1.2-invariants-only': 'https://spdx.org/licenses/GFDL-1.2-invariants-only.html',
        'GFDL-1.2-invariants-or-later': 'https://spdx.org/licenses/GFDL-1.2-invariants-or-later.html',
        'GFDL-1.2-no-invariants-only': 'https://spdx.org/licenses/GFDL-1.2-no-invariants-only.html',
        'GFDL-1.2-no-invariants-or-later': 'https://spdx.org/licenses/GFDL-1.2-no-invariants-or-later.html',
        'GFDL-1.2-only': 'https://spdx.org/licenses/GFDL-1.2-only.html',
        'GFDL-1.2-or-later': 'https://spdx.org/licenses/GFDL-1.2-or-later.html',
        'GFDL-1.3-invariants-only': 'https://spdx.org/licenses/GFDL-1.3-invariants-only.html',
        'GFDL-1.3-invariants-or-later': 'https://spdx.org/licenses/GFDL-1.3-invariants-or-later.html',
        'GFDL-1.3-no-invariants-only': 'https://spdx.org/licenses/GFDL-1.3-no-invariants-only.html',
        'GFDL-1.3-no-invariants-or-later': 'https://spdx.org/licenses/GFDL-1.3-no-invariants-or-later.html',
        'GFDL-1.3-only': 'https://spdx.org/licenses/GFDL-1.3-only.html',
        'GFDL-1.3-or-later': 'https://spdx.org/licenses/GFDL-1.3-or-later.html',
        GL2PS: 'https://spdx.org/licenses/GL2PS.html',
        GLWTPL: 'https://spdx.org/licenses/GLWTPL.html',
        'GPL-1.0-only': 'https://spdx.org/licenses/GPL-1.0-only.html',
        'GPL-1.0-or-later': 'https://spdx.org/licenses/GPL-1.0-or-later.html',
        'GPL-2.0-only': 'https://spdx.org/licenses/GPL-2.0-only.html',
        'GPL-2.0-or-later': 'https://spdx.org/licenses/GPL-2.0-or-later.html',
        'GPL-3.0-only': 'https://spdx.org/licenses/GPL-3.0-only.html',
        'GPL-3.0-or-later': 'https://spdx.org/licenses/GPL-3.0-or-later.html',
        Giftware: 'https://spdx.org/licenses/Giftware.html',
        Glide: 'https://spdx.org/licenses/Glide.html',
        Glulxe: 'https://spdx.org/licenses/Glulxe.html',
        HPND: 'https://spdx.org/licenses/HPND.html',
        'HPND-sell-variant': 'https://spdx.org/licenses/HPND-sell-variant.html',
        HTMLTIDY: 'https://spdx.org/licenses/HTMLTIDY.html',
        HaskellReport: 'https://spdx.org/licenses/HaskellReport.html',
        'Hippocratic-2.1': 'https://spdx.org/licenses/Hippocratic-2.1.html',
        'IBM-pibs': 'https://spdx.org/licenses/IBM-pibs.html',
        ICU: 'https://spdx.org/licenses/ICU.html',
        IJG: 'https://spdx.org/licenses/IJG.html',
        IPA: 'https://spdx.org/licenses/IPA.html',
        'IPL-1.0': 'https://spdx.org/licenses/IPL-1.0.html',
        ISC: 'https://spdx.org/licenses/ISC.html',
        ImageMagick: 'https://spdx.org/licenses/ImageMagick.html',
        Imlib2: 'https://spdx.org/licenses/Imlib2.html',
        'Info-ZIP': 'https://spdx.org/licenses/Info-ZIP.html',
        Intel: 'https://spdx.org/licenses/Intel.html',
        'Intel-ACPI': 'https://spdx.org/licenses/Intel-ACPI.html',
        'Interbase-1.0': 'https://spdx.org/licenses/Interbase-1.0.html',
        JPNIC: 'https://spdx.org/licenses/JPNIC.html',
        JSON: 'https://spdx.org/licenses/JSON.html',
        Jam: 'https://spdx.org/licenses/Jam.html',
        'JasPer-2.0': 'https://spdx.org/licenses/JasPer-2.0.html',
        'LAL-1.2': 'https://spdx.org/licenses/LAL-1.2.html',
        'LAL-1.3': 'https://spdx.org/licenses/LAL-1.3.html',
        'LGPL-2.0-only': 'https://spdx.org/licenses/LGPL-2.0-only.html',
        'LGPL-2.0-or-later': 'https://spdx.org/licenses/LGPL-2.0-or-later.html',
        'LGPL-2.1-only': 'https://spdx.org/licenses/LGPL-2.1-only.html',
        'LGPL-2.1-or-later': 'https://spdx.org/licenses/LGPL-2.1-or-later.html',
        'LGPL-3.0-only': 'https://spdx.org/licenses/LGPL-3.0-only.html',
        'LGPL-3.0-or-later': 'https://spdx.org/licenses/LGPL-3.0-or-later.html',
        LGPLLR: 'https://spdx.org/licenses/LGPLLR.html',
        'LPL-1.0': 'https://spdx.org/licenses/LPL-1.0.html',
        'LPL-1.02': 'https://spdx.org/licenses/LPL-1.02.html',
        'LPPL-1.0': 'https://spdx.org/licenses/LPPL-1.0.html',
        'LPPL-1.1': 'https://spdx.org/licenses/LPPL-1.1.html',
        'LPPL-1.2': 'https://spdx.org/licenses/LPPL-1.2.html',
        'LPPL-1.3a': 'https://spdx.org/licenses/LPPL-1.3a.html',
        'LPPL-1.3c': 'https://spdx.org/licenses/LPPL-1.3c.html',
        Latex2e: 'https://spdx.org/licenses/Latex2e.html',
        Leptonica: 'https://spdx.org/licenses/Leptonica.html',
        'LiLiQ-P-1.1': 'https://spdx.org/licenses/LiLiQ-P-1.1.html',
        'LiLiQ-R-1.1': 'https://spdx.org/licenses/LiLiQ-R-1.1.html',
        'LiLiQ-Rplus-1.1': 'https://spdx.org/licenses/LiLiQ-Rplus-1.1.html',
        Libpng: 'https://spdx.org/licenses/Libpng.html',
        'Linux-OpenIB': 'https://spdx.org/licenses/Linux-OpenIB.html',
        'Linux-man-pages-copyleft': 'https://spdx.org/licenses/Linux-man-pages-copyleft.html',
        MIT: 'https://spdx.org/licenses/MIT.html',
        'MIT-0': 'https://spdx.org/licenses/MIT-0.html',
        'MIT-CMU': 'https://spdx.org/licenses/MIT-CMU.html',
        'MIT-Modern-Variant': 'https://spdx.org/licenses/MIT-Modern-Variant.html',
        'MIT-advertising': 'https://spdx.org/licenses/MIT-advertising.html',
        'MIT-enna': 'https://spdx.org/licenses/MIT-enna.html',
        'MIT-feh': 'https://spdx.org/licenses/MIT-feh.html',
        'MIT-open-group': 'https://spdx.org/licenses/MIT-open-group.html',
        MITNFA: 'https://spdx.org/licenses/MITNFA.html',
        'MPL-1.0': 'https://spdx.org/licenses/MPL-1.0.html',
        'MPL-1.1': 'https://spdx.org/licenses/MPL-1.1.html',
        'MPL-2.0': 'https://spdx.org/licenses/MPL-2.0.html',
        'MPL-2.0-no-copyleft-exception': 'https://spdx.org/licenses/MPL-2.0-no-copyleft-exception.html',
        'MS-PL': 'https://spdx.org/licenses/MS-PL.html',
        'MS-RL': 'https://spdx.org/licenses/MS-RL.html',
        MTLL: 'https://spdx.org/licenses/MTLL.html',
        MakeIndex: 'https://spdx.org/licenses/MakeIndex.html',
        MirOS: 'https://spdx.org/licenses/MirOS.html',
        Motosoto: 'https://spdx.org/licenses/Motosoto.html',
        'MulanPSL-1.0': 'https://spdx.org/licenses/MulanPSL-1.0.html',
        'MulanPSL-2.0': 'https://spdx.org/licenses/MulanPSL-2.0.html',
        Multics: 'https://spdx.org/licenses/Multics.html',
        Mup: 'https://spdx.org/licenses/Mup.html',
        'NAIST-2003': 'https://spdx.org/licenses/NAIST-2003.html',
        'NASA-1.3': 'https://spdx.org/licenses/NASA-1.3.html',
        'NBPL-1.0': 'https://spdx.org/licenses/NBPL-1.0.html',
        'NCGL-UK-2.0': 'https://spdx.org/licenses/NCGL-UK-2.0.html',
        NCSA: 'https://spdx.org/licenses/NCSA.html',
        NGPL: 'https://spdx.org/licenses/NGPL.html',
        'NIST-PD': 'https://spdx.org/licenses/NIST-PD.html',
        'NIST-PD-fallback': 'https://spdx.org/licenses/NIST-PD-fallback.html',
        'NLOD-1.0': 'https://spdx.org/licenses/NLOD-1.0.html',
        'NLOD-2.0': 'https://spdx.org/licenses/NLOD-2.0.html',
        NLPL: 'https://spdx.org/licenses/NLPL.html',
        NOSL: 'https://spdx.org/licenses/NOSL.html',
        'NPL-1.0': 'https://spdx.org/licenses/NPL-1.0.html',
        'NPL-1.1': 'https://spdx.org/licenses/NPL-1.1.html',
        'NPOSL-3.0': 'https://spdx.org/licenses/NPOSL-3.0.html',
        NRL: 'https://spdx.org/licenses/NRL.html',
        NTP: 'https://spdx.org/licenses/NTP.html',
        'NTP-0': 'https://spdx.org/licenses/NTP-0.html',
        Naumen: 'https://spdx.org/licenses/Naumen.html',
        'Net-SNMP': 'https://spdx.org/licenses/Net-SNMP.html',
        NetCDF: 'https://spdx.org/licenses/NetCDF.html',
        Newsletr: 'https://spdx.org/licenses/Newsletr.html',
        Nokia: 'https://spdx.org/licenses/Nokia.html',
        Noweb: 'https://spdx.org/licenses/Noweb.html',
        'O-UDA-1.0': 'https://spdx.org/licenses/O-UDA-1.0.html',
        'OCCT-PL': 'https://spdx.org/licenses/OCCT-PL.html',
        'OCLC-2.0': 'https://spdx.org/licenses/OCLC-2.0.html',
        'ODC-By-1.0': 'https://spdx.org/licenses/ODC-By-1.0.html',
        'ODbL-1.0': 'https://spdx.org/licenses/ODbL-1.0.html',
        'OFL-1.0': 'https://spdx.org/licenses/OFL-1.0.html',
        'OFL-1.0-RFN': 'https://spdx.org/licenses/OFL-1.0-RFN.html',
        'OFL-1.0-no-RFN': 'https://spdx.org/licenses/OFL-1.0-no-RFN.html',
        'OFL-1.1': 'https://spdx.org/licenses/OFL-1.1.html',
        'OFL-1.1-RFN': 'https://spdx.org/licenses/OFL-1.1-RFN.html',
        'OFL-1.1-no-RFN': 'https://spdx.org/licenses/OFL-1.1-no-RFN.html',
        'OGC-1.0': 'https://spdx.org/licenses/OGC-1.0.html',
        'OGDL-Taiwan-1.0': 'https://spdx.org/licenses/OGDL-Taiwan-1.0.html',
        'OGL-Canada-2.0': 'https://spdx.org/licenses/OGL-Canada-2.0.html',
        'OGL-UK-1.0': 'https://spdx.org/licenses/OGL-UK-1.0.html',
        'OGL-UK-2.0': 'https://spdx.org/licenses/OGL-UK-2.0.html',
        'OGL-UK-3.0': 'https://spdx.org/licenses/OGL-UK-3.0.html',
        OGTSL: 'https://spdx.org/licenses/OGTSL.html',
        'OLDAP-1.1': 'https://spdx.org/licenses/OLDAP-1.1.html',
        'OLDAP-1.2': 'https://spdx.org/licenses/OLDAP-1.2.html',
        'OLDAP-1.3': 'https://spdx.org/licenses/OLDAP-1.3.html',
        'OLDAP-1.4': 'https://spdx.org/licenses/OLDAP-1.4.html',
        'OLDAP-2.0': 'https://spdx.org/licenses/OLDAP-2.0.html',
        'OLDAP-2.0.1': 'https://spdx.org/licenses/OLDAP-2.0.1.html',
        'OLDAP-2.1': 'https://spdx.org/licenses/OLDAP-2.1.html',
        'OLDAP-2.2': 'https://spdx.org/licenses/OLDAP-2.2.html',
        'OLDAP-2.2.1': 'https://spdx.org/licenses/OLDAP-2.2.1.html',
        'OLDAP-2.2.2': 'https://spdx.org/licenses/OLDAP-2.2.2.html',
        'OLDAP-2.3': 'https://spdx.org/licenses/OLDAP-2.3.html',
        'OLDAP-2.4': 'https://spdx.org/licenses/OLDAP-2.4.html',
        'OLDAP-2.5': 'https://spdx.org/licenses/OLDAP-2.5.html',
        'OLDAP-2.6': 'https://spdx.org/licenses/OLDAP-2.6.html',
        'OLDAP-2.7': 'https://spdx.org/licenses/OLDAP-2.7.html',
        'OLDAP-2.8': 'https://spdx.org/licenses/OLDAP-2.8.html',
        OML: 'https://spdx.org/licenses/OML.html',
        'OPL-1.0': 'https://spdx.org/licenses/OPL-1.0.html',
        'OPUBL-1.0': 'https://spdx.org/licenses/OPUBL-1.0.html',
        'OSET-PL-2.1': 'https://spdx.org/licenses/OSET-PL-2.1.html',
        'OSL-1.0': 'https://spdx.org/licenses/OSL-1.0.html',
        'OSL-1.1': 'https://spdx.org/licenses/OSL-1.1.html',
        'OSL-2.0': 'https://spdx.org/licenses/OSL-2.0.html',
        'OSL-2.1': 'https://spdx.org/licenses/OSL-2.1.html',
        'OSL-3.0': 'https://spdx.org/licenses/OSL-3.0.html',
        OpenSSL: 'https://spdx.org/licenses/OpenSSL.html',
        'PDDL-1.0': 'https://spdx.org/licenses/PDDL-1.0.html',
        'PHP-3.0': 'https://spdx.org/licenses/PHP-3.0.html',
        'PHP-3.01': 'https://spdx.org/licenses/PHP-3.01.html',
        'PSF-2.0': 'https://spdx.org/licenses/PSF-2.0.html',
        'Parity-6.0.0': 'https://spdx.org/licenses/Parity-6.0.0.html',
        'Parity-7.0.0': 'https://spdx.org/licenses/Parity-7.0.0.html',
        Plexus: 'https://spdx.org/licenses/Plexus.html',
        'PolyForm-Noncommercial-1.0.0': 'https://spdx.org/licenses/PolyForm-Noncommercial-1.0.0.html',
        'PolyForm-Small-Business-1.0.0': 'https://spdx.org/licenses/PolyForm-Small-Business-1.0.0.html',
        PostgreSQL: 'https://spdx.org/licenses/PostgreSQL.html',
        'Python-2.0': 'https://spdx.org/licenses/Python-2.0.html',
        'QPL-1.0': 'https://spdx.org/licenses/QPL-1.0.html',
        Qhull: 'https://spdx.org/licenses/Qhull.html',
        'RHeCos-1.1': 'https://spdx.org/licenses/RHeCos-1.1.html',
        'RPL-1.1': 'https://spdx.org/licenses/RPL-1.1.html',
        'RPL-1.5': 'https://spdx.org/licenses/RPL-1.5.html',
        'RPSL-1.0': 'https://spdx.org/licenses/RPSL-1.0.html',
        'RSA-MD': 'https://spdx.org/licenses/RSA-MD.html',
        RSCPL: 'https://spdx.org/licenses/RSCPL.html',
        Rdisc: 'https://spdx.org/licenses/Rdisc.html',
        Ruby: 'https://spdx.org/licenses/Ruby.html',
        'SAX-PD': 'https://spdx.org/licenses/SAX-PD.html',
        SCEA: 'https://spdx.org/licenses/SCEA.html',
        'SGI-B-1.0': 'https://spdx.org/licenses/SGI-B-1.0.html',
        'SGI-B-1.1': 'https://spdx.org/licenses/SGI-B-1.1.html',
        'SGI-B-2.0': 'https://spdx.org/licenses/SGI-B-2.0.html',
        'SHL-0.5': 'https://spdx.org/licenses/SHL-0.5.html',
        'SHL-0.51': 'https://spdx.org/licenses/SHL-0.51.html',
        SISSL: 'https://spdx.org/licenses/SISSL.html',
        'SISSL-1.2': 'https://spdx.org/licenses/SISSL-1.2.html',
        SMLNJ: 'https://spdx.org/licenses/SMLNJ.html',
        SMPPL: 'https://spdx.org/licenses/SMPPL.html',
        SNIA: 'https://spdx.org/licenses/SNIA.html',
        'SPL-1.0': 'https://spdx.org/licenses/SPL-1.0.html',
        'SSH-OpenSSH': 'https://spdx.org/licenses/SSH-OpenSSH.html',
        'SSH-short': 'https://spdx.org/licenses/SSH-short.html',
        'SSPL-1.0': 'https://spdx.org/licenses/SSPL-1.0.html',
        SWL: 'https://spdx.org/licenses/SWL.html',
        Saxpath: 'https://spdx.org/licenses/Saxpath.html',
        SchemeReport: 'https://spdx.org/licenses/SchemeReport.html',
        Sendmail: 'https://spdx.org/licenses/Sendmail.html',
        'Sendmail-8.23': 'https://spdx.org/licenses/Sendmail-8.23.html',
        'SimPL-2.0': 'https://spdx.org/licenses/SimPL-2.0.html',
        Sleepycat: 'https://spdx.org/licenses/Sleepycat.html',
        'Spencer-86': 'https://spdx.org/licenses/Spencer-86.html',
        'Spencer-94': 'https://spdx.org/licenses/Spencer-94.html',
        'Spencer-99': 'https://spdx.org/licenses/Spencer-99.html',
        'SugarCRM-1.1.3': 'https://spdx.org/licenses/SugarCRM-1.1.3.html',
        'TAPR-OHL-1.0': 'https://spdx.org/licenses/TAPR-OHL-1.0.html',
        TCL: 'https://spdx.org/licenses/TCL.html',
        'TCP-wrappers': 'https://spdx.org/licenses/TCP-wrappers.html',
        TMate: 'https://spdx.org/licenses/TMate.html',
        'TORQUE-1.1': 'https://spdx.org/licenses/TORQUE-1.1.html',
        TOSL: 'https://spdx.org/licenses/TOSL.html',
        'TU-Berlin-1.0': 'https://spdx.org/licenses/TU-Berlin-1.0.html',
        'TU-Berlin-2.0': 'https://spdx.org/licenses/TU-Berlin-2.0.html',
        'UCL-1.0': 'https://spdx.org/licenses/UCL-1.0.html',
        'UPL-1.0': 'https://spdx.org/licenses/UPL-1.0.html',
        'Unicode-DFS-2015': 'https://spdx.org/licenses/Unicode-DFS-2015.html',
        'Unicode-DFS-2016': 'https://spdx.org/licenses/Unicode-DFS-2016.html',
        'Unicode-TOU': 'https://spdx.org/licenses/Unicode-TOU.html',
        Unlicense: 'https://spdx.org/licenses/Unlicense.html',
        VOSTROM: 'https://spdx.org/licenses/VOSTROM.html',
        'VSL-1.0': 'https://spdx.org/licenses/VSL-1.0.html',
        Vim: 'https://spdx.org/licenses/Vim.html',
        W3C: 'https://spdx.org/licenses/W3C.html',
        'W3C-19980720': 'https://spdx.org/licenses/W3C-19980720.html',
        'W3C-20150513': 'https://spdx.org/licenses/W3C-20150513.html',
        WTFPL: 'https://spdx.org/licenses/WTFPL.html',
        'Watcom-1.0': 'https://spdx.org/licenses/Watcom-1.0.html',
        Wsuipa: 'https://spdx.org/licenses/Wsuipa.html',
        X11: 'https://spdx.org/licenses/X11.html',
        'X11-distribute-modifications-variant': 'https://spdx.org/licenses/X11-distribute-modifications-variant.html',
        'XFree86-1.1': 'https://spdx.org/licenses/XFree86-1.1.html',
        XSkat: 'https://spdx.org/licenses/XSkat.html',
        Xerox: 'https://spdx.org/licenses/Xerox.html',
        Xnet: 'https://spdx.org/licenses/Xnet.html',
        'YPL-1.0': 'https://spdx.org/licenses/YPL-1.0.html',
        'YPL-1.1': 'https://spdx.org/licenses/YPL-1.1.html',
        'ZPL-1.1': 'https://spdx.org/licenses/ZPL-1.1.html',
        'ZPL-2.0': 'https://spdx.org/licenses/ZPL-2.0.html',
        'ZPL-2.1': 'https://spdx.org/licenses/ZPL-2.1.html',
        Zed: 'https://spdx.org/licenses/Zed.html',
        'Zend-2.0': 'https://spdx.org/licenses/Zend-2.0.html',
        'Zimbra-1.3': 'https://spdx.org/licenses/Zimbra-1.3.html',
        'Zimbra-1.4': 'https://spdx.org/licenses/Zimbra-1.4.html',
        Zlib: 'https://spdx.org/licenses/Zlib.html',
        blessing: 'https://spdx.org/licenses/blessing.html',
        'bzip2-1.0.6': 'https://spdx.org/licenses/bzip2-1.0.6.html',
        'copyleft-next-0.3.0': 'https://spdx.org/licenses/copyleft-next-0.3.0.html',
        'copyleft-next-0.3.1': 'https://spdx.org/licenses/copyleft-next-0.3.1.html',
        curl: 'https://spdx.org/licenses/curl.html',
        diffmark: 'https://spdx.org/licenses/diffmark.html',
        dvipdfm: 'https://spdx.org/licenses/dvipdfm.html',
        eGenix: 'https://spdx.org/licenses/eGenix.html',
        'etalab-2.0': 'https://spdx.org/licenses/etalab-2.0.html',
        'gSOAP-1.3b': 'https://spdx.org/licenses/gSOAP-1.3b.html',
        gnuplot: 'https://spdx.org/licenses/gnuplot.html',
        iMatix: 'https://spdx.org/licenses/iMatix.html',
        'libpng-2.0': 'https://spdx.org/licenses/libpng-2.0.html',
        'libselinux-1.0': 'https://spdx.org/licenses/libselinux-1.0.html',
        libtiff: 'https://spdx.org/licenses/libtiff.html',
        mpich2: 'https://spdx.org/licenses/mpich2.html',
        psfrag: 'https://spdx.org/licenses/psfrag.html',
        psutils: 'https://spdx.org/licenses/psutils.html',
        xinetd: 'https://spdx.org/licenses/xinetd.html',
        xpp: 'https://spdx.org/licenses/xpp.html',
        'zlib-acknowledgement': 'https://spdx.org/licenses/zlib-acknowledgement.html',
    }

    public static getLicenseHtml(licenseName: string | undefined): string {
        if (licenseName != undefined && licenseName in this._licenseLookup) {
            return this._licenseLookup[licenseName]
        }
        return `https://spdx.org/licenses`
    }

    public static getUniqueLicenseNames(references: References | undefined): Set<string> {
        const n = new Set<string>()
        references?.forEach(r => {
            if (r.licenseName) {
                n.add(r.licenseName)
            }
        })
        return n
    }
}
