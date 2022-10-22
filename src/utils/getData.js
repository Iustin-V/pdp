export const getData = (contextLocal, titleSection) => {
  if (contextLocal.length !== 0) {
    return contextLocal?.find((el) => el?.sectionName === titleSection);
  } else return [];
};