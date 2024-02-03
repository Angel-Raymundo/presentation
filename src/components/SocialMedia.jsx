import React from "react";
import Photo from "./Photo";
import Button from "./Button";
import PropTypes from "prop-types";

const SocialMedia = ({ facebook, instagram, github, linkedin }) => {
  return (
    <>
      <Button
        type="button"
        style="mt-5 flex justify-center items-center w-10 h-10 rounded-full bg-[#E5E5E5] hover:bg-[#d1cfcf]"
        click={() => {
          window.open(facebook, "_blank");
        }}
      >
        <Photo image="facebook" style="h-9" alt="Facebook" />
      </Button>
      <Button
        type="button"
        style="flex justify-center items-center w-10 h-10 rounded-full bg-[#E5E5E5] hover:bg-[#d1cfcf]"
        click={() => {
          window.open(instagram, "_blank");
        }}
      >
        <Photo image="instagram" style="h-8" alt="Instagram" />
      </Button>
      <Button
        type="button"
        style="flex justify-center items-center w-10 h-10 rounded-full bg-[#E5E5E5] hover:bg-[#d1cfcf]"
        click={() => {
          window.open(github, "_blank");
        }}
      >
        <Photo image="gitHub" style="h-9" alt="GitHub" />
      </Button>
      <Button
        type="button"
        style="mb-2 flex justify-center items-center w-10 h-10 rounded-full bg-[#E5E5E5] hover:bg-[#d1cfcf]"
        click={() => {
          window.open(linkedin, "_blank");
        }}
      >
        <Photo image="linked" style="h-8" alt="LinkedIn" />
      </Button>
    </>
  );
};

SocialMedia.propTypes = {
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  github: PropTypes.string,
  linkedin: PropTypes.string,
};

export default SocialMedia;
