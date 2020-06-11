import React from "react";
import { Box } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { NavButtonModel } from "app/modules/QueryBuilder/layout";
import { css } from "styled-components/macro";

export const NavigationButton = (props: NavButtonModel) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <NavLink
      to={props.path}
      // activeStyle={{ borderBottom: "4px solid #03dbe4" }}

      id="navlink"
      css={`
          display: flex;
          align-items: center;
          justify-content: center;
          height: 32px;
          padding-right: 20px;
          padding-left: 20px;
          /* width: ${md ? "135px" : "235px"}; */          

          &.active {
            .pingpong{
                 background-color:#145062;
                 color:white;
          } 
  }

TabNine::configCouldn't start web browser at http://127.0.0.1:5555/swlmgttkulurpuyjewnr. See https://tabnine.com/faq#browser_failed
&:hover{
  .pingpong{
                 background-color:#145062;
                 color:white;
          } 
}
        
      `}
    >
      <div
        className="pingpong"
        css={`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 28px;
          height: 28px;
          background-color: white;
          border-radius: 50%;
          flex-shrink: 0;
          border: 1px solid #145062;
          color: #145062;
          margin-right: 22px;
          font-size: 16px;
        `}
      >
        {props.index}
      </div>
      <div
        css={`
          font-family: Inter;
          font-style: normal;
          font-weight: 300;
          text-align: center;
          line-height: 1.5;
          color: #165163;
          letter-spacing: 0.15px;
          font-size: 16px;
        `}
      >
        {props.label}
      </div>
    </NavLink>
  );
};
