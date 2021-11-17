const BODY_PARTS = ["eyes", "mouth", "ears", "horn", "back", "tail"];
const REGION_GENE_MAP = { "00000": "global", "00001": "japan" };
const PART_ORDER = [0, 2, 4, 1, 3, 5];

function decodeGenes(genes) {
    if (genes == null || genes === "0x0") {
      return undefined;
    }
    const genesBinary = genesToBinary(genes);
    const groups = getGroups(genesBinary);
    const region = getRegionFromGroup(groups[0]);
    const parts = getParts(groups, region);
    
    let decoded = {
      parts: PART_ORDER.map((i) => parts[i]),
    };
    return decoded;
}

function genesToBinary(genes) {
    const genesBigNum = BigInt(genes);
    const genesString = genesBigNum.toString(2);
    const genesBinary = "0".repeat(256 - genesString.length) + genesString;
    return genesBinary;
}

function getGroups(genesBinary) {
    const groups = [];
    for (let i = 0; i < 8; i += 1) {
      groups.push(genesBinary.slice(i * 32, (i + 1) * 32));
    }
    return groups;
}

function getRegionFromGroup(group) {
    const regionBinary = group.slice(8, 13);
    if (regionBinary in REGION_GENE_MAP) {
      return REGION_GENE_MAP[regionBinary];
    }
    return "Unknown Region";
}

function getPartFromName(bodyPartType, partName) {
    let traitId =
      bodyPartType.toLowerCase() +
      "-" +
      partName
        .toLowerCase()
        .replace(/\s/g, "-")
        .replace(/[\?'\.]/g, "");
    return BODY_PARTS_DICT[traitId];
}
  
function getPartsFromGroup(part, group, region) {
	const skinBinary = group.slice(0, 2);
	const mystic = skinBinary == "11";

	const dClass = BINARY_TO_CLASS_MAP[group.slice(2, 6)];
	const dBin = group.slice(6, 12);
	const dName = getPartName(dClass, part, region, dBin, skinBinary);

	const r1Class = BINARY_TO_CLASS_MAP[group.slice(12, 16)];
	const r1Bin = group.slice(16, 22);
	const r1Name = getPartName(r1Class, part, region, r1Bin);

	const r2Class = BINARY_TO_CLASS_MAP[group.slice(22, 26)];
	const r2Bin = group.slice(26, 32);
	const r2Name = getPartName(r2Class, part, region, r2Bin);

	return {
		d: getPartFromName(part, dName),
		r1: getPartFromName(part, r1Name),
		r2: getPartFromName(part, r2Name),
		mystic: mystic,
	};
}
  
 function getPartName(cls, part, region, binary, skinBinary = "00") {
    let trait;
    if (binary in CLASS_TO_PART_MAP[cls][part]) {
      if (skinBinary == "11") {
        trait = CLASS_TO_PART_MAP[cls][part][binary]["mystic"];
      } else if (skinBinary == "10") {
        trait = CLASS_TO_PART_MAP[cls][part][binary]["xmas"];
      } else if (region in CLASS_TO_PART_MAP[cls][part][binary]) {
        trait = CLASS_TO_PART_MAP[cls][part][binary][region];
      } else if ("global" in CLASS_TO_PART_MAP[cls][part][binary]) {
        trait = CLASS_TO_PART_MAP[cls][part][binary]["global"];
      } else {
        trait = "UNKNOWN Regional " + cls + " " + part;
      }
    } else {
      trait = "UNKNOWN " + cls + " " + part;
    }
    return trait;
}
  
function getParts(groups, region) {
    return BODY_PARTS.map((part, i) =>
      getPartsFromGroup(part, groups[i + 2], region)
    );
};