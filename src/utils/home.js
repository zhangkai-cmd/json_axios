import {Route} from "react-router-dom";
import About from "../pages/about";
import AndreLwoff from "../pages/andre-lwoff";
import ClinicalStudies from "../pages/clinical-studies";
import Product from "../pages/product";
import WeizmannInstitute from "../pages/weizmann-institute";
import React from "react";

export const tabData = [
    {
        name: 'HOME',
        key: '1',
        path: '/home'
    },
    {
        name: 'ABOUT US',
        key: '2',
        path: '/about'
    },
    {
        name: 'André Lwoff',
        key: '3',
        path: '/lwoff'
    },
    {
        name: 'WEIZMANN INSTITUTE',
        key: '4',
        path: '/institute'
    },
    {
        name: 'PRODUCT',
        key: '5',
        path: '/product'
    },
    {
        name: 'CLINICAL STUDIES',
        key: '6',
        path: '/studies'
    }
]