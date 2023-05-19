import {useUtilStore} from '../stores/UtilStore'

function showSnackbar(msg){
    let utilStore = useUtilStore()
    utilStore.showSnackbar(msg)
}

export {showSnackbar}
