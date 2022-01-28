import useJsonFetch from "../../hooks/useJsonFetch";

export default function NewLoading() {

    const [data, loading, error] = useJsonFetch('https://lap-herocu-hooks.herokuapp.com/loading');
    
    console.log(error);

    return (
        <div className="box-loading">
        <span>Status loading: </span>
        <span>{loading? 'loading...': null}
        {data? data.status : null}
        </span>            
        </div>
    );
}
