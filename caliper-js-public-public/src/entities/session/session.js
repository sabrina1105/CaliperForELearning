/*
 * This file is part of IMS Caliper Analytics™ and is licensed to
 * IMS Global Learning Consortium, Inc. (http://www.imsglobal.org)
 * under one or more contributor license agreements.  See the NOTICE
 * file distributed with this work for additional information.
 *
 * IMS Caliper is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * IMS Caliper is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE.  See the GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License along
 * with this program. If not, see http://www.gnu.org/licenses/.
 */

var _ = require('lodash-node');
var Entity = require('../entity');
var EntityType = require('../entityType');

/**
 * Represents Session.  
 * Session's prototype set to Entity
 * @constructor
 * @param {string} id URI
 * @property {Object} actor
 * @property {string} startedAtTime String Representation of Date
 * @property {string} endedAtTime String Representatio of Date
 * @property {string} duration The format is expected to be PnYnMnDTnHnMnS
 * @extends Entity
 */
function Session(id) {
    Entity.call(this);
    this.setId(id);
    this.setType(EntityType.SESSION);
    this.setActor(null);
    this.setStartedAtTime(null);
    this.setEndedAtTime(null);
    this.setDuration(null);
}

Session.prototype = _.create(Entity.prototype);

Session.prototype.setActor = function(actor) {
    this.actor = actor;
};

Session.prototype.setStartedAtTime = function(startedAt) {
    this.startedAtTime = startedAt;
};

Session.prototype.setEndedAtTime = function(endedAt) {
    this.endedAtTime = endedAt;
};

Session.prototype.setDuration = function(duration) {
    this.duration = duration;
};

module.exports = Session;