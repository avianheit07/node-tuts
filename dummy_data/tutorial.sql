-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2019 at 07:37 PM
-- Server version: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `tutorial`
--

-- --------------------------------------------------------

--
-- Table structure for table `sites`
--

CREATE TABLE IF NOT EXISTS `sites` (
  `id` int(3) NOT NULL,
  `url` varchar(255) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `name` varchar(100) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `acronym` varchar(5) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `site_order` tinyint(1) NOT NULL DEFAULT '0',
  `description` text COLLATE latin1_general_ci NOT NULL,
  `tags` text COLLATE latin1_general_ci NOT NULL,
  `niche` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `bg_image` varchar(255) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `header_images` text COLLATE latin1_general_ci NOT NULL,
  `site_logo` varchar(255) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `site_thumbnail` varchar(255) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `trailer_link` varchar(255) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `site_color` varchar(255) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `site_color_hover` varchar(255) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `trailer_trap_link` varchar(255) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `picture_trap_link` varchar(255) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `main_join_link` varchar(255) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `slug` varchar(255) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `hidden_in_tours` varchar(255) COLLATE latin1_general_ci DEFAULT 'no',
  `has_bestof_video` varchar(255) COLLATE latin1_general_ci NOT NULL DEFAULT 'yes',
  `sitefolder` varchar(100) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `sitecolor` varchar(100) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `sitecolorhover` varchar(100) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `natssiteid` int(11) NOT NULL DEFAULT '0',
  `mobile_ma_site_order` int(10) DEFAULT '0',
  `mobile_clicks` int(11) NOT NULL DEFAULT '0',
  `live` int(1) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=69845 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `thumbs`
--

CREATE TABLE IF NOT EXISTS `thumbs` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `folder` varchar(225) NOT NULL,
  `image` varchar(500) NOT NULL,
  `title` varchar(225) NOT NULL,
  `siteId` int(11) NOT NULL,
  `live` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sites`
--
ALTER TABLE `sites`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `thumbs`
--
ALTER TABLE `thumbs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sites`
--
ALTER TABLE `sites`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=69845;
--
-- AUTO_INCREMENT for table `thumbs`
--
ALTER TABLE `thumbs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
