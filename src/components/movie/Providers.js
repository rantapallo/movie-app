const Providers = ({providers}) => {
  return (
    <div className="providers">
      <h1>Providers</h1>
      {(providers.results.hasOwnProperty('FI')) && (providers.results.FI.hasOwnProperty('flatrate')) ?
      providers.results.FI.flatrate.map((provider) => (
        <div className="providers-card pd-lr25" key={provider.provider_id}>
          <div className="providers-image">
            <img 
              className="details-img"
              alt="not available"
              src={`https://www.themoviedb.org/t/p/w138_and_h175_face${provider.logo_path}`}
            />
          </div>
          <div className="providers-name">{provider.provider_name}</div>
        </div>
      ))
    : ''
    }
    </div>
   );
}
 
export default Providers;