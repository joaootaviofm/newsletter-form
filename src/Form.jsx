import { useState } from 'react'

export default function Form(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [check,setCheck] = useState(null)
    const [checkName, setCheckName] = useState(false)
    const [checkEmail, setCheckEmail] = useState(false)
    const [checkAgree, setCheckAgree] = useState(false)


    function signUp(){
        
    }

    function handleName(event){
        setName(event.target.value)
    }

    function handleEmail(event){
        setEmail(event.target.value)
    }

    function handleCheck(event){
        setCheck(event.target.checked)
        alert()
        // not done
    }

    return (
        <>
            <div>
                <div className="mb-[10px] text-white flex flex-col items-center w-96">
                    <h1 className="font-bold text-[34px]">Sign Up!</h1>
                    <p className="text-[16px]">Sign our newsletter and keep yourself updated!</p>
                </div>
                <div className="bg-gray-300 rounded-[5px] p-[20px] flex flex-col gap-[10px]">
                    <div className="flex flex-col">
                        <label className="text-[14px]" htmlFor="inputName">Nome</label>
                        <input onChange={handleName} className="text-[14px] p-[5px] outline-0 w-96 rounded-[10px] bg-white" type="text" id="inputName" placeholder="Insira seu nome"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="inputEmail">E-mail</label>
                        <input onClick={handleEmail} className="text-[14px] p-[5px] outline-0 w-96 rounded-[10px] bg-white" type="email" id="inputEmail" placeholder="Insira seu melhor e-mail"/>
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <a className="underline" href="#">Leia os termos</a>
                        </div>
                        <div className="items-center flex gap-[5px]">
                            <input onClick={handleCheck} type="checkbox" id="checkTerms" />
                            <label htmlFor="checkTerms">I agree</label>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button onClick={signUp} className="text-white cursor-pointer bg-gray-600 hover:bg-gray-700 transition-all duration-500 w-96 rounded-[7px] p-[4px]">Sign up</button>
                    </div>
                </div>
                <p className="w-96 align text-center text-[14px] text-white">When you sign up, you will be receiving our e-mails with the best tips, news and offers.</p>
            </div>
        </>
    )
}