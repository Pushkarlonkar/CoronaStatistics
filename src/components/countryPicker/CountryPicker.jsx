import React,{useState,useEffect} from 'react'
import M from "materialize-css";
import { fetchCountries } from '../../api/index';

class CountryPicker extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          ctr :[]
        };
    }
    componentDidMount(){
        const fetchApi = async()=>{
            const ct = await fetchCountries();
            // console.log(ct);
            if(ct){
                this.setState({ctr:ct});
            }
            console.log(this.state.ctr);   
        }
        fetchApi();
    }
    
    componentDidUpdate(){
        M.AutoInit();
    }
    
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col s10 offset-s1 m4 offset-m4">
                        <div className="input-field col s12" onChange={(e)=>this.props.handleCountryChange(e.target.value)} >
                            {/* {ctr} */}
                            <select >
                                <option value="" >Global</option>
                                {this.state.ctr.map((country,i)=><option key = {i} value={country.name} >{country.name}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// const CountryPicker = ({handleCountryChange}) => {
//     const[ctr,setCtr] = useState([]);
//     useEffect(()=>{
//         // console.log("Fetched countries");
//         const fetchApi = async() => {
//             const ct = await fetchCountries();
//             // console.log(ct);
//             // console.log(ctr); 
//             if(ct){
//                 setCtr(ct);
//                 // console.log(ctr);
//             }  
//         }
//         fetchApi();
//         // console.log(ctr);
//     },[ctr])

//     useEffect(()=>{
//         M.AutoInit();  
//     },[])

//     const handleSelect = (e)=>{
//         // handleCountryChange(e.target.value)
//     }
//     return (
//         <div>
//             <div className="row">
//                 <div className="col s10 offset-s1 m4 offset-m4">
//                     <div className="input-field col s12" onChange={(e)=>{handleCountryChange(e.target.value)}} >
//                         {/* {ctr} */}
//                         <select >
//                             <option >Global</option>
//                             {ctr.map((country,i)=><option key = {i} value={country.name} >{country.name}</option>)}
//                         </select>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default CountryPicker
