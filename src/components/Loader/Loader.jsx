import { Hourglass } from "react-loader-spinner";

export default function Loader() {
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
