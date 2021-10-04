import React, { createContext, useState, useEffect } from "react";
import { usehistory } from "react-router-dom";
import { auth } from "../firebase";

const authContext = React.createContext(auth);

export const useAuth = () => createContext(authContext);
