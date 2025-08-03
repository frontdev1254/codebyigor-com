import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import { useTranslation } from "react-i18next";

const ContactMeSection = () => {
  const { t } = useTranslation();
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {
      submit("http://localhost:5000/send-email", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(t("Required")),
      email: Yup.string().email(t("invalidEmail")).required(t("Required")),
      comment: Yup.string().min(25, t("minLength")).required(t("Required")),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);

  return (
    <FullScreenSection isDarkBackground backgroundColor="#1D1D1F" py={16} spacing={8}>
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          {t("contactMe")}
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">{t("name")}</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                  bg="white"
                  color="black"
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">{t("email")}</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  bg="white"
                  color="black"
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="type">{t("typeOfEnquiry")}</FormLabel>
                <Select
                  id="type"
                  name="type"
                  {...formik.getFieldProps("type")}
                  bg="white"
                  color="black"
                  focusBorderColor="purple.500"
                >
                  <option value="hireMe">{t("enquiryOptions.hireMe")}</option>
                  <option value="collaboration">{t("enquiryOptions.collaboration")}</option>
                  <option value="businessInquiry">{t("enquiryOptions.businessInquiry")}</option>
                  <option value="generalQuestion">{t("enquiryOptions.generalQuestion")}</option>
                  <option value="other">{t("enquiryOptions.other")}</option>
                </Select>
              </FormControl>

              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">{t("yourMessage")}</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                  bg="white"
                  color="black"
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              <Button
              type="submit"
              bg="#007aff"
              color="white"
              _hover={{ bg: "#005ecb" }}
              width="full"
              isLoading={isLoading}
             >
             {t("submit")}
             </Button>

            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;