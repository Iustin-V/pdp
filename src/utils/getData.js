export const getData = (contextLocal, titleSection) => {
    if (contextLocal[0]) {
        return contextLocal.find((el) => el?.sectionName == titleSection);
    } else return [];
};
