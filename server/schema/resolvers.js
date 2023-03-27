import {
    UserList,
    MovieList,
    OrderList,
    holidayOffers
} from '../FakeData.js'
import _ from 'lodash'

export const resolvers = {
    /**
     * @AllQueries
     */
    Query: {
        // USER RESOLVER
        /**
         *
         * @returns the list of all users
         */
        users: () => {
            return UserList;
        },
        /**
         * @parent / _ - Gives you the value that was resolved by
         * a parent in the chain of types
         * @args - Use args to get the access to the ID
         * @returns a user by ID
         */
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, { id: Number(id) });
            return user;
        },

        // MOVIE RESOLVERS
        /**
         *
         * @returns A list of all movies
         */
        movies: () => {
            return MovieList;
        },
        /**
         * @returns a movie by name
         */
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, { name });
            return movie
        },

        // ORDER RESOLVERS
        /**
         * 
         * @returns A list of all orders in the db
         */
        orders: () => {
            return OrderList
        },
        /**
         * @returns a order by status
         */
        order: (parent, args) => {
            const status = args.status;
            const order = _.find(OrderList, { status });
            return order
        },

        orderById: (parent, args) => {
            const id = args.id;
            const orderById = _.find(OrderList, { id: Number(id) });
            return orderById;
        },

        // HOLIDAY RESOLVERS
        /**
         * 
         * @returns Returns all the holiday offers
         */
        // holidayOffers: () => {
        //     return holidayOffers
        // },

        holidayOffers: (parent, args) => {
            const { first, orderBy } = args;

            // Apply the ordering to the holiday offers based on the orderBy argument
            let orderedOffers = holidayOffers;
            if (orderBy === 'DATE_ADDED_DESC') {
                orderedOffers = holidayOffers.sort((a, b) => {
                    if (a.id > b.id) {
                        return -1;
                    } else if (b.id > a.id) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            }

            // Return the first n offers based on the first argument
            return orderedOffers.slice(0, first);
        },

    },
    /**
     * @returns the favorite movies from the movie list
     */
    User: {
        favoriteMovies: () => {
            return _.filter(
                MovieList, (movie) => movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
            )
        },
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastId = UserList[UserList.length - 1].id
            user.id = lastId + 1
            UserList.push(user);
            return user;

            console.log(user);
        },
        updateUsername: (parent, args) => {
            const { id, newUsername } = args.input;
            let userUpdated;
            UserList.forEach((user) => {
                //check if the user id is same as the id for updating
                if (user.id === id) {
                    user.username = newUsername;
                    userUpdated = user
                }
            })
            return userUpdated;

            console.log(userUpdated);
        },

        deleteUser: (parent, args) => {
            const id = args.id;
            _.remove(UserList, (user) => user.id === Number(id));
            return null;
        },

        //order

        updateStatus: (parent, args) => {
            const id = args.id;
            const status = args.status;
            // find the order with the given ID
            const order = _.find(OrderList, { id: Number(id) });

            if (!order) {
                throw new Error(`Order with ID ${id} not found`);
            }

            // update the order's status
            order.status = status;

            // return the updated order
            return order;
        },


        /**
         * 
         * @returns 
         */
        markVisited: (parent, args) => {
            const id = args.id;
            // const offer = holidayOffers.find(offer => offer.id === id);
            const offer = _.find(holidayOffers, { id: Number(id) });
            if (!offer) {
                throw new Error(`Holiday offer with id ${id} not found.`);
            }
            offer.visitedCount += 1;
            return offer;
        },

    }
}