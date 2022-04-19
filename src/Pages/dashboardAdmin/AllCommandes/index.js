import React, { useCallback, useEffect, useState } from 'react';
import ListAllCommande from "./ListAllCommande"
import _ from "lodash";
import axios from 'axios';
import useIsMountedRef from '../../../hooks/useIsMountedRef';

export default function AllCommandes() {
  
   
  return (
    <div >
   <ListAllCommande/>
    </div>
  );
}
