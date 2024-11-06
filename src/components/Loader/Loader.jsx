import { Hourglass } from "react-loader-spinner";
import css from './Loader.module.css'
export default function Loader(){

    return (
      <div>
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
        <p>Loading data, please wait...</p>
      </div>
    );
}