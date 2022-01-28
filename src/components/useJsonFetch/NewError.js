import useJsonFetch from "../../hooks/useJsonFetch";

export default function NewError() {
    
    const [data, loading, error] = useJsonFetch('https://lap-herocu-hooks.herokuapp.com/error');

    console.log(data);

    return (
        <div className="box-loading">            
        <p>{loading? 'loading': null}
        {error}
        </p>
        </div>
    );
}
