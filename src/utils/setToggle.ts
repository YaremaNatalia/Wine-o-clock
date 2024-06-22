const setToggle =
  (setter: React.Dispatch<React.SetStateAction<boolean>>) => () => {
    setter((prev) => !prev);
  };

  export default setToggle;