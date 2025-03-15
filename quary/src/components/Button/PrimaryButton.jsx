import React from 'react';

function PrimaryButton({
    name,
    clickme,
    widthsizemd,
    widthsizesm,
    bgColor = "#FF7318", // Default background color
    textColor = "white", // Default text color
    hoverBgColor = "black", // Default hover background color
    hoverTextColor = "white" // Default hover text color
}) {
    return (
        <div
            className={`px-[30px] pt-[17px] flex items-center justify-center text-nowrap text-[18.4px] font-semibold leading-[20%] font-Playfair pb-[13px] h-[48px] cursor-pointer
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
