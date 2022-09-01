import React, {useCallback, useEffect, useState} from "react";
import {TableProps} from "../../../types/proptypes";
import {useNavigate} from "react-router-dom";
import {useData} from "../../../utils/hooks/use-data";
import {TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue} from "@chakra-ui/react";
import {Table as TableContent} from "@chakra-ui/table";
import {item} from "../../../types/models/Item";
import { CardItem } from "../../../pages/Landing/components/CardItem";

export const listItem = () => {

    const [dataSet, setDataSet] = useState<any[]>([]);
    const { getList } = useData();

    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await getList("dishes");
                setDataSet(data);
            } catch (err) {
                console.log(err);
            }
        }

        fetch();
    }, []);


    return (
        <>
            {dataSet.map((label)=>
            <CardItem key={label.id} price={label.price} category={label.category} name={label.name}/>
            )}
        </>
    )
}
