import { Check } from "@mui/icons-material";
import { Avatar, Badge, BadgeProps, styled } from "@mui/material";
import colors from "@styles/colors";
import { FC, useState } from "react";
import { dishesListIcons } from "../../../src/contents/dishesList";
import { dishesOptionsType } from "../../../src/types/global";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: "20px",
    top: "20px",
    padding: "initial",
    borderRadius: "12px",
    color: "white",
    backgroundColor:colors('light').offset_primary
  },
}));

const DishIcon: FC<{
  type: keyof typeof dishesOptionsType;
  width: number;
  height: number;
  background: string;
  color: string;
  active: boolean;
  disabled: boolean;
  complete: boolean;
  dishHandleClick(type: keyof typeof dishesOptionsType): void;
}> = ({
  type,
  width,
  height,
  background,
  color,
  active,
  disabled,
  complete,
  dishHandleClick,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      {!complete && (
        <Avatar
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          sx={{
            width,
            height,
            backgroundColor:
              ((hover || active) && !disabled) || complete
                ? colors("light").primary
                : background,
            cursor: disabled ? "" : "pointer",
          }}
          onClick={() => !disabled && dishHandleClick(type)}
        >
          {
            dishesListIcons((hover || active) && !disabled ? "white" : color)[
              type
            ]
          }
        </Avatar>
      )}
      {complete && (
        <StyledBadge badgeContent={<Check sx={{fontSize:"18px"}} />} >
          <Avatar
            sx={{
              width,
              height,
              backgroundColor: colors("light").primary,
            }}
          >
            {dishesListIcons("white")[type]}
          </Avatar>
        </StyledBadge>
      )}
    </>
  );
};

export default DishIcon;
