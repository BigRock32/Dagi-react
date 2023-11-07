

import { services } from "../../helpers/servicesList";

import Service from "./../service/Service";


function ServicesList() {
   return (
      <>
         {
            services.map((service, index) => {
               return (
                  <Service
                     key={index}
                     title={service.title}
                     item1={service.list.item1}
                     item2={service.list.item2}
                     item3={service.list.item3}
                     item4={service.list.item4}
                     price={service.price}
                     index={index}
                  />
               );
            })
         }
      </>
   )
}

export default ServicesList
