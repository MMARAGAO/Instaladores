var xmlSynonymsData = "";
xmlSynonymsData += '<?xml version=\"1.0\" encoding=\"utf-8\"?>';
xmlSynonymsData += '<MadCapSynonyms xml:lang=\"zh-CN\">';
xmlSynonymsData += '    <!-- saved from url=(0016)http://localhost -->';
xmlSynonymsData += '    <Groups>';
xmlSynonymsData += '        <SynonymGroup Stem=\"true\">';
xmlSynonymsData += '            <Word Stem=\"图像\">图像</Word>';
xmlSynonymsData += '            <Word Stem=\"视频\">视频</Word>';
xmlSynonymsData += '        </SynonymGroup>';
xmlSynonymsData += '    </Groups>';
xmlSynonymsData += '    <Directional>';
xmlSynonymsData += '        <DirectionalSynonym Stem=\"true\" From=\"更改\" To=\"alter=modify=customise=customize=edit\" FromStem=\"更改\" />';
xmlSynonymsData += '    </Directional>';
xmlSynonymsData += '</MadCapSynonyms>';
MadCap.Utilities.Xhr._FilePathToXmlStringMap.Add('Synonyms', xmlSynonymsData);
