import useJsonFetch from "../../hooks/useJsonFetch";

export default function NewData() {

    const [data, loading, error] = useJsonFetch('https://lap-herocu-hooks.herokuapp.com/data');

    console.log(data);
    console.log(error);

    return (
        <div className="box-loading">
        <p>{loading? 'loading': null}
            {data.status}</p></div>
    );
}
