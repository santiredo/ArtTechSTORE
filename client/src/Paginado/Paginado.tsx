// import React from "react";
import { useDispatch } from "react-redux";
import style from './paginado.module.css'
import { prev,next } from "../Redux/Actions/action";

interface PaginateProps {
    numPage: number;
    cantPage: number;
  }


export default function Paginate({ numPage, cantPage }:PaginateProps) {
  const dispatch = useDispatch();
  console.log("#####num page in paginate", numPage)
  return (
    <div className={style.container}>
      <div className={style.paginate}>
        {numPage <= 1 ? (
          <>
            <div></div>
            <div></div>
          </>
        ) : (
          <>
            <button onClick={() => dispatch(prev())}>PREV</button>
            <p>{numPage - 1}</p>
          </>
        )}
        <h3>{numPage}</h3>
        {numPage > cantPage ? (
          <>
            <div></div>
            <div></div>
          </>
        ) : (
          <>
            <p>{numPage + 1}</p>
            <button onClick={() => dispatch(next())}>NEXT</button>
          </>
        )}
      </div>
    </div>
  );
}