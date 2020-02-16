import React from 'react'
import { ClassicSpinner } from "react-spinners-kit";
import { CommonLoading } from 'react-loadingg';

export const Loading = (props) => {
    return (
        <div className="pt-5 pl-3 ml-5">
            <ClassicSpinner size={30} color="rgb(0, 255, 204)" loading={true} />
            <br />
        </div>
    );
}

export const FullLoading = () => {
    return <CommonLoading />
}