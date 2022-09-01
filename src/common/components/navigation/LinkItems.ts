import { FaCoffee, FaFirstOrder } from "react-icons/fa";
import { LinkItem } from "../../../types/proptypes/navigation/LinkItem";

export const LinkItems: LinkItem[]  = [
  {
    label: 'Plats',
    icon: FaCoffee,
    to: '/dishes'
  },
  {
    label: 'Commande',
    icon: FaFirstOrder,
    to: '/orders'
  }
]
