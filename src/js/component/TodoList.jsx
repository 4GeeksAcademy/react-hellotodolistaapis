import React from "react";
import { useState, useEffect } from "react";


const TodoList = () => {

    const [inputuValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    const [comment, setComment] = useState("mmmm... eso que estás pensando...le gusta a WW!!");

    console.log(todos)



    useEffect(() => {
        getToDos();       
    }, [])






    const getToDos = () => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("https://playground.4geeks.com/todo/users/david", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setTodos(result.todos)
            })
            .catch((error) => console.error(error));
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
       
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && inputuValue.trim() !== "") {
            addTodo();
           
        }
    };

    const addTodo = () => {
        if (inputuValue.trim() !== "") {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                label: inputuValue,
                is_done: false
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch("https://playground.4geeks.com/todo/todos/david", requestOptions)
                .then((response) => response.json())
                .then((result) =>{ getToDos()
                const newComment = comentario(); // Generar el comentario
                setComment(newComment); // Guardar el comentario en el estado
        })
                .catch((error) => console.error(error));

            //  setTodos([...todos, inputuValue]);
            comentario();
            setInputValue("");
            
        }
    };

    const deletedo = (id) => {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "label": "iral gym a cantar ",
            "is_done": false
        });

        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`https://playground.4geeks.com/todo/todos/${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                getToDos();
                
            })
            
            .catch((error) => console.error(error));

    }

    const comentario = () => {
        let commentSuperman = ["anda no me jodas , que vaya regalo de mierder!!", "mola mazo,ese regalo!!","Porfa, eso ya lo tenemos..!!","Nos esperabamos algo mas currao!!","Buena idea,me encanta..!!","Ojiplaticos estamos ...madre mía!!"];
        const randomIndex = Math.floor(Math.random() * commentSuperman.length);
        return commentSuperman[randomIndex];
    }
    



    return (
        <>
            <div className="fondo">          
                <div className="container wrap">
                    <div className="titulo row">
                    
                        <h1>Enlace</h1>
                        <h2>WonderWoman</h2>
                        <h3>And..</h3>
                        <h2>SuperMan</h2>
                    </div>
                    <div className="inputTarea">
                        <input type="text"
                            value={inputuValue}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            placeholder="Escribe tu regalo de boda..."
                        />
                    </div>
                    <div className="listadoRegalos container">
                        <ul className="articuloCaja">
                            {todos.map((elemento, index) =>
                                <li className="regalo d-flex justify-content-around" key={index}>
                                    <span className="text-aling-center w-100">{elemento.label}</span>
                                    <div className="d-flex aling-items-center me-1">
                                        <i className="boton" onClick={() => deletedo(elemento.id)}><i className="fa-solid fa-eraser"></i></i>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>

                </div>
                <h1 className="comentario">{comment}</h1>
            </div>
        </>
    )
}
export default TodoList;