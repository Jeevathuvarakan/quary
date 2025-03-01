import React from 'react';

function PrimaryButton({
    name,
    clickme,
    widthsizemd,
    widthsizesm,
    bgColor = "#E0CC1F", // Default background color
    textColor = "#1E1E1E", // Default text color
    hoverBgColor = "black", // Default hover background color
    hoverTextColor = "white" // Default hover text color
}) {
    return (
        <div
            className={`px-[32px] pt-[14px] flex items-center justify-center text-nowrap text-[17px] font-semibold leading-[20%] font-Playfair pb-[13px] h-[48px] cursor-pointer rounded-[30px]
      ${widthsizemd === "fit" ? "md:w-fit" : "md:w-full"} 
      ${widthsizesm === "full" ? "w-full" : "w-fit"}
      transition-colors duration-300`}
            style={{
                backgroundColor: bgColor,
                color: textColor, // Default text color
            }}
            onClick={clickme}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = hoverBgColor;
                e.currentTarget.style.color = hoverTextColor;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = bgColor;
                e.currentTarget.style.color = textColor;
            }}
        >
            {name}
        </div>
    );
}

export default PrimaryButton;
