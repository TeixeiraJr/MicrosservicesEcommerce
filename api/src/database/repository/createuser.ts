import knex from '../knex';

interface user {
    name: string;
    document: string;
}

export default {
    async findOrCreateUser(user: user) { 
        const userSaved = await knex('users').where('document', user.document).then(async (res: any) => {
            if (res.length == 0) {
                const newUser = await knex('users').insert(user).returning('id').then((res: any) => {
                    return res;
                });
                let userRetorno = {
                    id: newUser[0].id,
                    name: user.name,
                    document: user.document
                }
                return userRetorno
                } else {
                let userRetorno = {
                        id: res[0].id,
                        name: res[0].name,
                        document: res[0].document
                }
                return userRetorno;
                }
        })
        return userSaved
    }
}