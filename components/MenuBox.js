export default function MenuBox({ optionJSX }) {
  return (
    <div className="box MenuBox">
      {optionJSX.map((el) => {
        return (
          <div className="MenuBoxEl" key={el.id}>
            {el.jsx}
          </div>
        );
      })}
    </div>
  );
}
