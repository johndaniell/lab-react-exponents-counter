const Exponent = ({ count, exponent }) => (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}<sup>{exponent}</sup></p>
      <p className="exponent-result">
        {Array.from({ length: exponent }, (_, index) => count).join(' * ')} ={' '}
        <span className="total">{count ** exponent}</span>
      </p>
    </div>
  );
  
  export default Exponent;
  