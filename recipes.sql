
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;



Drop DATABASE recipes;
 
CREATE DATABASE recipes;

USE recipes;


--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `id` int(5) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `imagelink` varchar(255) NOT NULL,
  `recipeid` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`id`, `name`, `description`, `imagelink`, `recipeid`) VALUES
(1, 'Burger', 'Cheesy Burger', 'https://images.unsplash.com/photo-1534790566855-4cb788d389ec?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=29d5fd7ac0936122d9f8453830f358df&auto=format&fit=crop&w=500&q=60', '106907569341295437503'),
(2, 'Burger', 'Cheesy', 'https://images.unsplash.com/photo-1534790566855-4cb788d389ec?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=29d5fd7ac0936122d9f8453830f358df&auto=format&fit=crop&w=500&q=60', '106907569341295437503'),
(3, 'Burger', 'TASTYYY', 'https://images.unsplash.com/photo-1534790566855-4cb788d389ec?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=29d5fd7ac0936122d9f8453830f358df&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60', '106907569341295437503');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(5) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `userid` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
