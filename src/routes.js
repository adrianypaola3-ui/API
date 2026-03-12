import { Router } from 'express';
import { 
    selectPessoas, 
    selectPessoa, 
    insertPessoa, 
    updatePessoa, 
    deletePessoa 
} from './Controller/pessoa.js'; 

const router = Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode": 200,
        "msg": "API Rodando"
    });
});

router.get('/pessoas', selectPessoas);
router.get('/pessoa', selectPessoa);
router.post('/pessoa', insertPessoa);
router.put('/pessoa', updatePessoa);
router.delete('/pessoa', deletePessoa);

export default router;