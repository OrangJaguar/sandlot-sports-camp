export const REGISTRATION_URL = 'https://sandlotdublin.regfox.com/sandlot-sports-camp-of-dublin';

export const REGISTRATION_OPENS = 'Saturday, January 9 at 10:00 AM';

export const TUITION = '$269';

export const CAMP_WEEKS = [
  { week: 'Week 1', dates: 'June 14–18' },
  { week: 'Week 2', dates: 'June 21–25' },
  { week: 'Week 3', dates: 'June 28–July 2' },
  { week: 'Week 4', dates: 'July 5–9' },
  { week: 'Week 5', dates: 'July 12–16' },
  { week: 'Week 6', dates: 'July 19–23' },
];

export const CAMP_LOCATION = {
  name: 'Eli Pinney Elementary School',
  street: '9989 Concord Road',
  city: 'Dublin, OH 43017',
};

export const CAMP_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${CAMP_LOCATION.name}, ${CAMP_LOCATION.street}, ${CAMP_LOCATION.city}`
)}`;