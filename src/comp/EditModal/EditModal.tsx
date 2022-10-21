import React from "react";
import axios from "axios";

import {
  ModalCover,
  ModalWrapper,
  StyledSaveButton,
  StyledText,
  StyledTextArea,
  ContentContainer,
} from "./EditModalStyle";
import { colors } from "../../generalStyle";
import { capitalizeFirstLetter } from "../../utils/Capitalize";
import Login from "../Login/Login";

interface EditModalProps {
  modalData: any;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  editModal: boolean;
  data?: {};
  handleSave?: () => void;
}

export const EditModal = (props: EditModalProps) => {
  const localModalData = props?.modalData;
  const [updateObject, setUpdateObject] = React.useState({});
  const [intermediaryObject, setUpdateIntermediaryObject] = React.useState({});
  const [updateArray, setUpdateArray] = React.useState([]);
  const [updateObjectArray, setUpdateObjectArray] = React.useState([{}]);
  const [initialArray, setInitialArray] = React.useState([]);
  const [initialObjectArray, setInitialObjectArray] = React.useState([]);

  if (props.editModal) {
    document.body.style.overflow = "hidden";
  }
  let config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2ZjN2M1N2RlYmYxOTE4ZWI1Mjc5MiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjU3NDM0Mjl9.xiEvj5nl3X2edINIShjEl3k9M12cvgnWTm8Fvi7b0Lg",
    },
  };

  React.useEffect(() => {
    setUpdateObjectArray(initialObjectArray);
    setUpdateArray(initialArray);
  }, [initialArray, initialObjectArray]);

  const saveModal = () => {
    axios.put(
      `https://pdp-api.onrender.com /api/sections/${localModalData?._id}`,
      {
        ...updateObject,
        // content: ['Researchers have discovered that when we listen to stories, more chemicals are released in the brain associated with various emotional states. Thus, stories give meaning and emotion to our existence, motivate us and make us reflect on everything that happens around us. That\'s why stories chaaange behavior without resorting to the system of punishments and rewards.asddas','Les chercheurs ont découvert que lorsque nous écoutons des histoires, plus de produits chimiques sont libérés dans le cerveau associés à divers états émotionnels. Ainsi, les histoires donnent du sens et de l\'émotion à notre existence, nous motivent et nous font réfléchir sur tout ce qui se passe autour de nous. C\'est pourquoi les histoires changent les comportements sans recourir au système des punitions et des récompenses.','Nous avons assez de réunions, de conférences, de devoirs et de devoirs ! Les histoires sont amusantes, éducatives, motivantes et stimulent la créativité, ce qui nous aide dans tous les domaines de la vie. Les histoires nous donnent différents points de vue sur la même réalité et nous font trouver des solutions ingénieuses à des problèmes que je pensais peut-être insolubles.','Et des réponses aux questions non encore posées.'],
        //@ts-ignore

        // content: updateArray,
        content: updateObjectArray,
      }
    );
    exitModal();
  };

  const exitModal = () => {
    props.setEditModal(false);
    document.body.style.overflow = "unset";
  };
  // console.log("localModalData", capitalizeFirstLetter);

  const handleMessageChange = (event: any) => {
    //@ts-ignore
    console.log("event.target.value", event.target.value);

    setUpdateObject({
      ...updateObject,
      [event.target.name]: event.target.value,
    });

    console.log("updateObject", updateObject);
  };

  const handleArrayMessageChange = (event: any, index?: number) => {
    console.log("initialArray", initialArray);

    console.log("initialArray1", initialArray.slice(0, index));
    setInitialArray(props.modalData[event.target.name]);
    // @ts-ignore
    // la copy paste trb adaugat un space la final ca sa  citeasca
    setUpdateArray([
      ...updateArray.slice(0, index),
      event.target.value,
      // @ts-ignore
      ...updateArray.slice(index + 1, initialArray.length),
    ]);

    console.log("verificare", updateArray.slice(0, index));

    console.log("updateArray", updateArray);
  };

  const handleObjectArrayMessageChange = (
    event: any,
    name: string,
    index: number
  ) => {
    setInitialObjectArray(props.modalData["content"]);
    setUpdateIntermediaryObject(updateObjectArray[index]);
    console.log("updateObjectArray", updateObjectArray, event);

    console.log("updateinitialObjectArray", initialObjectArray);
    console.log("updateStuff", {
      [name]: event.target.value,
    });
    console.log("updateStuff2", updateObjectArray[index]);

    setUpdateObjectArray([
      ...updateObjectArray.slice(0, index),
      { ...intermediaryObject, [name]: event.target.value },
      ...updateObjectArray.slice(index + 1, initialObjectArray.length),
    ]);
  };
  console.log("localModalData", localModalData);
  const textEditors = Object.keys(localModalData).map(
    (element: string, index: number) => {
      if (
        [
          "video",
          "title",
          "subtitle",
          "description",
          "label",
          "content",
        ].includes(element.toLowerCase()) &&
        localModalData[element].length !== 0
      ) {
        return (
          <>
            <StyledText color={colors.primary.base}>
              {capitalizeFirstLetter(element)}
            </StyledText>
            {Array.isArray(localModalData[element]) ? (
              localModalData[element].map((item: any, index: number) => {
                // typeof item === "object" &&
                // console.log("item", Object.keys(item));
                if (typeof item === "object") {
                  return Object.keys(item).map((objData: string) => {
                    return (
                      <>
                        {Array.isArray(item[objData]) ? (
                          <></>
                        ) : (
                          <>
                            <StyledText color={colors.primary.base}>
                              {capitalizeFirstLetter(objData)}{" "}
                            </StyledText>
                            <StyledTextArea
                              onChange={(e) =>
                                handleObjectArrayMessageChange(
                                  e,
                                  objData,
                                  index
                                )
                              }
                              name={item}
                            >
                              {item[objData]}
                            </StyledTextArea>
                          </>
                        )}
                      </>
                    );
                  });
                }
                return (
                  <>
                    <StyledTextArea
                      onChange={(e) => handleArrayMessageChange(e, index)}
                      name={element}
                      minHeight={
                        item.length > 50
                          ? (item.length / 3 + 20).toString() + "px"
                          : ""
                      }
                    >
                      {item}
                    </StyledTextArea>
                  </>
                );
              })
            ) : (
              <StyledTextArea
                onChange={(e) => handleMessageChange(e)}
                name={element}
              >
                {localModalData[element]}
              </StyledTextArea>
            )}
          </>
        );
      }
    }
  );
  return (
    <ModalCover>
      <ModalWrapper>
        <ContentContainer>
          <StyledText color={colors.primary.base}>Edit Section</StyledText>
          {textEditors}
          <StyledSaveButton onClick={saveModal}>Save</StyledSaveButton>
          <StyledSaveButton onClick={exitModal}>CLOSE</StyledSaveButton>
        </ContentContainer>
      </ModalWrapper>
    </ModalCover>
  );
};
