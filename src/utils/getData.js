export const getData = (contextLocal, titleSection) => {
  if (contextLocal) {
    return contextLocal?.find(
      (el) => el?.sectionName === titleSection
    );
  } else return [];
};
