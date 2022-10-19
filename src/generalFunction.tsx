export default function linkGenerate (title: string){
    let linkLower = title?.replaceAll(' ', '-').toLowerCase()
    const regex = /[!"#$%&'()*+,./:;<=>?@[\]^_`{|}~]/g;
    let linkPrimer = linkLower?.replace(regex, '')
    return linkPrimer?.normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(regex, '');
}