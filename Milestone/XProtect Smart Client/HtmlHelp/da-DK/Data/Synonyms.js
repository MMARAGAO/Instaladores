var xmlSynonymsData = "";
xmlSynonymsData += '<?xml version=\"1.0\" encoding=\"utf-8\"?>';
xmlSynonymsData += '<MadCapSynonyms xml:lang=\"da-DK\">';
xmlSynonymsData += '    <!-- saved from url=(0016)http://localhost -->';
xmlSynonymsData += '    <Groups>';
xmlSynonymsData += '        <SynonymGroup Stem=\"true\">';
xmlSynonymsData += '            <Word Stem=\"billed\">billede</Word>';
xmlSynonymsData += '            <Word Stem=\"video\">video</Word>';
xmlSynonymsData += '        </SynonymGroup>';
xmlSynonymsData += '    </Groups>';
xmlSynonymsData += '    <Directional>';
xmlSynonymsData += '        <DirectionalSynonym Stem=\"true\" From=\"rediger\" To=\"juster=modificer=tilpas=ændr\" FromStem=\"red\" />';
xmlSynonymsData += '    </Directional>';
xmlSynonymsData += '</MadCapSynonyms>';
MadCap.Utilities.Xhr._FilePathToXmlStringMap.Add('Synonyms', xmlSynonymsData);
