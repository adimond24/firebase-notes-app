"use client";

import React from "react";
import{
    Box, 
    Input, 
    Button,
    textarea, 
    Stack,
    Select,
    useToast,
    Textarea,
} from "@chakra-ui/react"
import useAuth from "../hooks/useAuth"
import {addTodo} from "../api/todo";
import { disablePersistentCacheIndexAutoCreation } from "firebase/firestore";
const AddTodo = () => {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [status, setStatus] = React.useState("pending");
    const [isLoading, setIsLoading] = React.useState(false);
    const toast = useToast();
    const {isLoggedIn, user} = useAuth();
    const handleTodoCreate = async () =>{
        if(!isLoggedIn) {
            toast({
                title: "You must be logged in to create a todo",
                status: "error",
                duration: 9000,
                isCloseable: true,
            });
            return;
        }
        setIsloading(true);
        const todo = {
            title, 
            description,
            status,
            userId: user.uid,
        };
        await addTodo(todo);
        setIsLoading(false);
        setTitle("");
        setDescription("");
        setStatus("");
        toast({title: "Todo created successfully", status: "success"});
    };
    return(
      <Box w="40%" margin={"0 auto"} display="block" mt={5}>
        <Stack direction="column">
            <Input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}/>
            <Textarea
             placeholder="Description"
             value={description}
             onChange={(e) => setDescription(e.target.value)}
            />
            <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option
                 value={"pending"}
                 style={{color:"yellow", fontWeight: "bold"}}
                >
                    Pending
                </option>
                <option
                 value={"completed"}
                 style={{color:"green", fontWeight:"bold"}}
                >
                    Completed
                </option>
            </Select>
            <Button
              onClick={() => handleTodoCreate()}
              disabled={title.length < 1 || description.length <1 || isLoading}
              variant="solid"
              color={"white"}
              bg={"teal.400"}
             
            >
                Add
            </Button>
        </Stack>
      </Box>
    )
}
export default AddTodo;