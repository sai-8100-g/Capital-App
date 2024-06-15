const CapitalItem = props => {
  const {countryAndCapitalsList} = props
  const {capitalDisplayText, id} = countryAndCapitalsList
  return <option value={id}>{capitalDisplayText}</option>
}

export default CapitalItem
