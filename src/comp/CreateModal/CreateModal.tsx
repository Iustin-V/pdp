import React from "react";
import axios from "axios";

import {
  ContentContainer,
  ModalCover,
  ModalWrapper,
  StyledSaveButton,
  StyledText,
  StyledTextArea,
} from "../EditModal/EditModalStyle";
import { colors } from "../../generalStyle";
import { capitalizeFirstLetter } from "../../utils/Capitalize";

interface CreateModalProps {
  data: any;
  createModalSchema: string;
  setCreateModal: React.Dispatch<
    React.SetStateAction<{ visibility: boolean; schema: string }>
  >;
}
export const CreateModal = (props: CreateModalProps) => {
  const [updateObject, setUpdateObject] = React.useState({});
  const [updateArray, setUpdateArray] = React.useState([]);

  const [courseType, setCourseType] = React.useState({
    title: "",
    image: "",
    text: ["", "", "", ""],
    price: "",
    time: "",
  });
  React.useEffect(() => {
    // props.createModalSchema === "course"
    //     ? {
    //       title: "",
    //       image: "",
    //       text: ["", "", "", ""],
    //       price: "",
    //       time: "",
    //     }
    //     : {
    //       alt: "",
    //       date: "",
    //       image: "",
    //       text: "",
    //       time: "",
    //       titleSection: "",
    //       website: "",
    //     }
    if (props.createModalSchema === "course") {
      setCourseType({
        title: "",
        image: "",
        text: ["", "", "", ""],
        price: "",
        time: "",
      });
    } else if (props.createModalSchema === "event") {
      setCourseType({
        titleSection: "",
        // @ts-ignore
        text: "",
        time: "",
        date: "",
        website: "",
        image: "",
        alt: "",
      });
    }
  }, [props.createModalSchema]);
  // const [eventType, setEventType] = React.useState({
  //   alt: "",
  //   date: "",
  //   image: "",
  //   text: "",
  //   time: "",
  //   titleSection: "",
  //   website: "",
  // });

  const handleCreate = () => {
    let text: undefined;
    if (updateArray.length > 0) {
      // @ts-ignore
      text = updateArray;
    } else {
      // @ts-ignore
      text = updateObject.text;
    }
    axios
      .put(`https://pdp-api.onrender.com/api/sections/${props.data?._id}`, {
        content: [
          ...props.data.content,
          {
            ...updateObject,
            text,
          },
        ],
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log("CreateError", error);
      });
    exitModal();
  };
  console.log("asdasdas", props.data);
  const handleMessageChange = (event: any) => {
    setUpdateObject({
      ...updateObject,
      [event.target.name]: event.target.value,
    });
  };
  const handleArrayMessageChange = (event: any, index?: number) => {
    // setInitialArray(props.data[event.target.name]);
    // @ts-ignore
    // la copy paste trb adaugat un space la final ca sa  citeasca
    setUpdateArray([
      ...updateArray.slice(0, index),
      event.target.value,
      // @ts-ignore
      ...updateArray.slice(index + 1, courseType.text.length),
    ]);
  };

  const handleEditArray = (addField: boolean) => {
    addField
      ? setCourseType({ ...courseType, text: [...courseType.text, ""] })
      : // @ts-ignore
      courseType.text.length > 1
      ? setCourseType({
          ...courseType,
          text: courseType.text.slice(0, courseType.text.length - 1),
        })
      : setCourseType({ ...courseType, text: courseType.text });
    console.log(courseType.text);
  };
  const exitModal = () => {
    props.setCreateModal({ visibility: false, schema: "none" });
    document.body.style.overflow = "unset";
  };
  const createInputs = Object.keys(courseType).map((element: string) => {
    return (
      <>
        <StyledText color={colors.primary.base}>
          {capitalizeFirstLetter(element)}
        </StyledText>
        {
          // @ts-ignore
          Array.isArray(courseType[element]) ? (
            <>
              {
                // @ts-ignore
                courseType[element].map((item: any, index: number) => {
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
              }
              <StyledSaveButton
                onClick={
                  // @ts-ignore
                  () => handleEditArray(true)
                }
              >
                +
              </StyledSaveButton>
              <StyledSaveButton
                onClick={
                  // @ts-ignore
                  () => handleEditArray(false)
                }
              >
                -
              </StyledSaveButton>
            </>
          ) : (
            <StyledTextArea
              onChange={(e) => handleMessageChange(e)}
              name={element}
              minHeight={
                // @ts-ignore
                courseType[element].length > 50
                  ? // @ts-ignore
                    (courseType[element].length / 3 + 20).toString() + "px"
                  : ""
              }
            >
              {
                // @ts-ignore
                courseType[element]
              }
            </StyledTextArea>
          )
        }
      </>
    );
  });

  return (
    <ModalCover>
      <ModalWrapper>
        <ContentContainer>
          <StyledText color={colors.primary.base}>Create new course</StyledText>
          {createInputs}
          <StyledSaveButton onClick={handleCreate}>Create</StyledSaveButton>
          <StyledSaveButton onClick={exitModal}>Close</StyledSaveButton>
        </ContentContainer>
      </ModalWrapper>
    </ModalCover>
  );
};
