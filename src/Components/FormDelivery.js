import { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import StateTypes from "../functions/StateTypes"

const CitySelector = (props) => {

    const cityList = props.data.map(city => {
        if (city.nomCommune) return <option value={city.nomCommune}>{city.nomCommune}</option>
    })

    /*return (
        <select name='city' id='city'>{cityList}</select>
    ) */

    let output;
    if (cityList.length === 1) {
        output = <p>{cityList[0].props.children}</p>
    } else {
        output = <select name='city' id='city'>{cityList}</select>
    }

    return output;
}

CitySelector.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        codePostal: PropTypes.string,
        nomCommune: PropTypes.string,
        codeCommune: PropTypes.string,
        libelleAcheminement: PropTypes.string
    }))
}



const FormDelivery = (props) => {
    const [city, setCity] = useState('') // API grâce zipCode
    const [cityList, setCityList] = useState([])
    const [zipCode, setZipCode] = useState('') // ASK
    const [address, setAddress] = useState('') // ASK - API
    const [number, setNumber] = useState(0)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!StateTypes.number(zipCode)) {
            setError('Mauvais code postal')
        }  else {
            setError(null)
        }
    }, [zipCode]);


    const handleZipChange = (e) => {
        const inputValue = e.target.value;

        if (!isNaN(inputValue)) {
            if (inputValue.length === 5) {
                const url = `https://apicarto.ign.fr/api/codes-postaux/communes/${inputValue}`;
                fetch(url)
                    .then(response => {
                        if (response.status === 200) {
                            return response.json();
                        } else {
                            setError(`Aucune ville trouvée au code postal : ${inputValue}`);
                            setCityList([]);
                        }
                    })
                    .then(res => {
                        if (res && res.length > 0) {
                            setCityList(res);
                        } else {
                            setCityList([]);
                        }
                    })
                    .catch(err => {
                        setError(`Problème lors de l'appel API. Désolé !`);
                        console.error(err);
                        setCityList([]);
                    });
            }
            else if (inputValue.length > 5) {
                return
            }
            setZipCode(inputValue);
        }
    };

    /*const {primaryAddress, setPrimaryAddress} = useState({
        city: '',
        zipCode: 0,
        number: 0,
        address: ''
    })*/
    return (
        <div>
            <h3>Quel est votre adresse? </h3>
            {error && <p>{error}</p>}
            <label htmlFor='zipcode'>Code Postal: </label>
            <input 
                type= 'text'
                name= 'zipcode'
                value={zipCode}
                onChange={handleZipChange}
            />

            {cityList
            ? <CitySelector data = {cityList} />
            : null    
    
            }




            
        </div>
    )
}

export default FormDelivery