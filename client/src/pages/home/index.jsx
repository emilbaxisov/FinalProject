import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./index.scss"
import foto1 from '../../undraw_teaching.svg'
import foto2 from '../../undraw_youtube_tutorial.svg'
import { FaUniversity } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import {Helmet} from 'react-helmet'
const Home = () => {

    const[users,setUsers] = useState([])
    const[loading,setLoading] = useState(false)
    const[input,setInput]= useState('')
    const[sort,setSort]= useState(false)

    useEffect(()=>{
        getUsers()
    }, [])
       
    const getUsers = async()=>{
        try {
            setLoading(true)
            let response = await axios.get("http://localhost:8000/users")
            setLoading(false)
            setUsers(response.data)
        } catch (error) {
            
        }
    }
    
    
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/users/${id}`).then(() => getUsers());
      };
    
      const handleSort = () =>{
        setSort(!sort)
        sort ? setUsers([...users.sort((a,b)=>a.age-b.age)]) :  getUsers()

      }
    
   
  return (
    <div className='home'>
        <Helmet>
      <title>
        Home
      </title>
    </Helmet>

        <div className='container1'>


            <div className='headerfoto'>
                <div className='headerfotoleft'>
                    <h1>Learn From The Expert</h1>
                    <p>Learn From The Expert
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
<button>ADMISSION NOW</button>
                </div>

                <div className='headerfotorigt'>
                    <h1>SING UP</h1>
                    <input type="text" /><br />
                    <input type="text" /><br />
                    <input type="text" /><br />
                    <button>SIGN UP</button>

                </div>
            </div>

            <div className='cards'>
                <div className='card1'>
                    <h1>Our Programs</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
                </div>

                <div className='cardfoto'>
                    <div className='cardfoto1'>
                        <img src={foto2} alt="" />
                    </div>
                    
                    <div className='cardwrite'>
                        <h1>We Are Excellent In Education</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
                        <div className='iconp'><p className='ptagicon'><FaGraduationCap/></p><p>22,931 Yearly Graduates</p></div>
                        <div className='iconp'><p className='ptagicon'><FaUniversity/></p><p>150 Universities Worldwide</p></div>
                    </div>
                </div>

                <div className='cardfoto'>
                <div className='cardwrite'>
                        <h1>Strive for Excellent</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
                        <div className='iconp'><p className='ptagicon'><FaGraduationCap/></p><p>22,931 Yearly Graduates</p></div>
                        <div className='iconp'><p className='ptagicon'><FaUniversity/></p><p>150 Universities Worldwide</p></div>
                    </div>

                    <div className='cardfoto11'>
                        <img src={foto1} alt="" />
                    </div>
                </div>
            </div>



            <div className='cardmap'>
                <div className='cardmaptop'>
                    <h1>Our Teachers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
                </div>


                <div className='inputandbutton'>
                <input type="text" placeholder='SEARCH'  onChange={(e)=>{setInput(e.target.value)}}/><br/>
                <button onClick={()=>handleSort()}>sort</button>
                </div>
                
                <div className='mapasaldiqimyer'>
                {
                    users
                    .filter ((users)=>{
                        return input.toLowerCase()===''
                        ?users
                        :users.name.toLowerCase().includes(input)
                    })
                    .map((q)=>{
                        return(
                            <>
                            <div className='main'>
                                <img src={q.imgUrl} alt="" />
                                <p>{q.name}</p>
                                <p>{q.job}</p>
                                <p>{q.age}</p>
                                <p className='ptagmap'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.</p>
                                <button onClick={()=>handleDelete(q._id)}>DeLeTe</button>
                            </div>
                            </>
                        )
                    })
                }
            </div>

            </div>



            <div className='add1'>
                <div className='add2'>
                    <h1>Message Us</h1>
                    <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                    <div className='inputs'><input type="text" placeholder='First name' /> <input type="text" placeholder='Last name' /></div>
                    <input type="text" placeholder='Subject' /><br />
                    <input type="text" placeholder='email' /><br />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Write your message here' ></textarea><br />
                    <button>SEND MESSAGE</button>
                </div>
            </div>



        
            





        </div>




    </div>
  )
}

export default Home