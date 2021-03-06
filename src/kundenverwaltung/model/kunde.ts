import {Document as MDocument, Model, model, Schema} from 'mongoose';
import {DB_CONFIG, isEmpty, isMongoId, logger} from '../../shared/index';

const kundeSchema: Schema = new Schema(
    {
      name: String,
      vorname: String,
      geburtstag: String,  // ToDo Date
      premium: Boolean,
      adresse: [Schema.Types.Mixed],
      telefonnummer: Number
    },
    {collection: 'kunden'});

kundeSchema.set('autoIndex', DB_CONFIG.autoIndex);

kundeSchema.set('toJSON', {getters: true, virtuals: false});

const MODEL_NAME: string = 'Kunde';

export function validateKunde(kunde: any): any {
    'use strict';

    let err: any = {};

    if (!kunde.isNew && !isMongoId(kunde._id)) {
        err.id = 'Der Kunde hat eine ungueltige ID';
        logger.debug('Kunde hat ungueltige ID');
    }
    if (isEmpty(kunde.name || kunde.vorname)) {
        err.name = 'Ein Kunde muss einen Vornamen und Nachnamen haben';
        logger.debug('Kunde muss Namen, Vornamen haben');
    }
    if (isEmpty(kunde.adresse)) {
        err.adresse = 'Der Kunde muss eine Adresse haben';
        logger.debug('Kunde muss eine Adress haben');
    }

    return Object.keys(err).length !== 0 ? err : undefined;
};

export const Kunde: Model<MDocument> = model(MODEL_NAME, kundeSchema);
