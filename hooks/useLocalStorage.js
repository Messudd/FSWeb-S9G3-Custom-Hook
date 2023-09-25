function useLocalStorage() {

 const writeModelocal = (mode,data) => {
    localStorage.setItem(mode, JSON.stringify(data));
    }
     
 const readModeLocal = (mode) => {
    return JSON.parse(localStorage.getItem(mode));
    }
     
 const initialReadModeFromlocal = (mode,initialMode) => {
    const data =  readModeLocal(mode);
     if(data){
        return data.darkMode;
       }
       else return initialMode;
     }
  return [writeModelocal,initialReadModeFromlocal];
}
export default useLocalStorage;
