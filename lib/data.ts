import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import languaTalk from "@/public/languaTalk.png";
import aiesec from "@/public/aiesec.png";
import openEnglish from "@/public/openEnglish.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Services",
    hash: "#Services",
  },
  {
    name: "Reviews",
    hash: "#reviews",
  },
  {
    name: "Qualifications",
    hash: "#qualifications",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const qualificationsData = [
  {
    title: "Arizona State University",
    location: "TESOL Certificate",
    description:
      "Focused on teaching approaches and methodologies of English to Speakers of Other Languages.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2023",
  },
  {
    title: "AIESEC Global Teacher Internship",
    location: "English and Spanish Language Teaching",
    description:
      "International Teaching Internship located in Bursa, Turkey, focused on the teaching of English and Spanish, intercultural communication, and language development.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2022",
  },
  {
    title: "Hankuk University of Foreign Studies",
    location: "ESL Language Instructor - Mobility Programme",
    description:
      "One-semester long Mobility Programme at HUFS in Seoul, South Korea, focused on Linguistics, Materials Development, Intercultural Communication, and English Presentation and Public Speaking.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Universidad Juárez del Estado de Durango",
    location: "Bachelor of Arts - English Language Teaching",
    description:
      "4 year university program focused on linguistics, Pedagogy, Didactics, and ELT Methadologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - 2017",
  },
] as const;

export const servicesData = [
  {
    title: "LanguaTalk",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    imageUrl: languaTalk,
  },
  {
    title: "Open English",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    imageUrl: openEnglish,
  },
  {
    title: "Aiesec Program",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    imageUrl: aiesec,
  },
] as const;

export const reviewsData = [
  {
    name: "Lindsey",
    country: "USA",
    description:
      "Aramis is fantastic. He mixes up learning styles and has made each class interesting. I’m looking forward to all of my future classes!",
  },
  {
    name: "Lyn",
    country: "USA",
    description:
      "Aramis is a great tutor. He is clear and concise and patient. His lesson plans are well thought out and our time is very well spent. He offers thoughtful corrections and suggestions that help my Spanish.",
  },
  {
    name: "Jordan",
    country: "USA",
    description:
      "Knowledgeable, patient, and kind. Personalized lessons make the content equally engaging and useful. I highly recommend Aramis. ",
  },
  {
    name: "Starr",
    country: "USA",
    description:
      "Aramis is well prepared not only with what I need, but also with what I MIGHT need. I appreciate his patience and positive feedback!",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
