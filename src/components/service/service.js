/**
 * service component
 *
 */

 import * as React from "react"
//  import 'bootstrap/dist/css/bootstrap.min.css';
 
 const Service = (props) => {
 
 
   return (
       <div
         className = "d-flex text-center text-black"
         id = {props.id}
         style={{
           margin: `0 auto`,
           maxWidth: `100%`,
           padding: `4rem 1.0875rem 1.45rem`,
           height: props.height
         }}
       >
         {props.sectionTitle} page
       </div>
   )
 }
 
 export default Service
 